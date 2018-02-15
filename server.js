// node/express app starts here

const express = require('express')
const app = express()

app.get('/', (request, response)=> {
  console.log('get request to /')
  response.end()
  // response.sendStatus(200)
})

// listen for requests. uncomment line depending on server. choose first for glitch, as the .env files with the port will become available when their site hosts the app. or use the second when running this app locally
// var listener = app.listen(process.env.PORT, function () {
var listener = app.listen( 5000, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
