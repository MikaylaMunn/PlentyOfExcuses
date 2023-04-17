// All my required libraries that I need
// All required Node modules are included in a package.json files
// require” and “module.exports” are used at least ten times throughout the app
// 4 requires
// Server logic is cleanly modularized
const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  //  surveyRoute = require('./routes/server.routes'),
  root = (__dirname + '../client/public'),
  userRoute = require('./routes/user.routes')
  trainerRoutes = require('./routes/trainer.routes'),
app = express(),
  PORT = 3000;
  require("./connection/index")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(root))
// When a user visits your homepage, you'll need to set up your server to send back a specific HTML (probably index.html), so you'll need to write an app.get('/') route.

// Custom logger
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

// using to go the route
app.use(userRoute)
app.use(trainerRoutes)
//   this is what the computer will listen for
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))