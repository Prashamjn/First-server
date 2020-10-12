const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bootstrap', (req, res) => {
  res.sendFile('bootstrap.html', { root: app.get('views') })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})