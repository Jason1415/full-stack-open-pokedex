/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('can navigate ivysaur', async ({ page }) => {
    await page.goto('/pokemon/ivysaur')
    await expect(page.getByText('overgrow')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
