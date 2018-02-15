const express = require('express')
const app = express()

app.get('/', (request, response)=> {
  // console.log( 'headers: ',request.headers) //everything is in here
  response.send(
    {
      'IP Address': request.headers['x-forwarded-for'] ? request.headers['x-forwarded-for'].split(',')[0] : 'no x-forwarded-for header!' ,
      'Language': request.headers['accept-language'].split(',')[0],
      'Operating Sytem': request.headers['user-agent'].split( /[\(\)]/ )[1]
    }
  )

})

// listen for requests. uncomment line depending on server. choose first for glitch, as the .env files with the port will become available when their site hosts the app. or use the second when running this app locally
// var listener = app.listen(process.env.PORT, function () {
var listener = app.listen( 5000, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
