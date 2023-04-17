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
const userSchema = new Schema(
    {
       name: {type: String, required: true}, 
        phone: {type: String, required: true}, 
        password:  {type: String, required: true}
    }
)
const users = mongoose.model('user', userSchema)
module.exports = users;