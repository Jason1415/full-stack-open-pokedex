/* eslint-disable no-undef */
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3001

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1') // Change this string whenever you want to verify a new version
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
