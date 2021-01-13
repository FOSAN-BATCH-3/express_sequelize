const express = require('express')
const port = 3000
const app = express()
const routing = require('./Routing/book.js')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routing)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})