const mongoose = require('mongoose')
const {Schema} = mongoose
// Schema the model uses.
// The permitted SchemaTypes are
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
// App utilizes at least three Mongoose models
const trainerSchema = new Schema(
    {
        name: {type:String, required: true},
        degree: {type:String, required: true},
        password:  {type:String, required: true},
        aboutme: {type:String, required: true},
        phone: {type:String, required: true},
    }
)
const trainers = mongoose.model('trainer', trainerSchema)
module.exports = trainers;