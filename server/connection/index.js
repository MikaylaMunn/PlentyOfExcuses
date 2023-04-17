const mongoose = require('mongoose')
// 1 require
const connectionString = "mongodb://localhost/noExcuses"
// App successfully connects to Mongo database through Mongoose
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// App utilizes at least one MongoDB collection of documents for data persistence and organization
mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${connectionString}`)
})

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connected error ${err}`)
})

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected")
})