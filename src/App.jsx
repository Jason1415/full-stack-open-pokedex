/* eslint-disable no-console */
import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { useApi } from './useApi'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import PokemonPage from './PokemonPage'
import PokemonList from './PokemonList'

const mapResults = (({ results }) => results.map(({ url, name }) => ({
  url,
  name,
  id: parseInt(url.match(/\/(\d+)\//)[1])
})))

const PokemonDetailWrapper = ({ pokemonList }) => {
  const { name } = useParams()
  const pokemon = pokemonList.find((p) => p.name === name)

  if (!pokemon) {
    return <ErrorMessage error={`No Pokémon found with name: ${name}`} />
  }

  const previous = pokemonList.find(({ id }) => id === pokemon.id - 1)
  const next = pokemonList.find(({ id }) => id === pokemon.id + 1)

  return (
    <PokemonPage
      pokemonList={pokemonList}
      previous={previous}
      next={next}
    />
  )
}

const App = () => {

  const { data: pokemonList, error, isLoading } = useApi('https://pokeapi.co/api/v2/pokemon/?limit=50', mapResults)
  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <div>
      <h2>PokeDex 1.0</h2>
      <Router>
        <Routes>
          <Route path="/" element={<PokemonList pokemonList={pokemonList} />}></Route>
          <Route
            path="/pokemon/:name"
            element={<PokemonDetailWrapper pokemonList={pokemonList} />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App