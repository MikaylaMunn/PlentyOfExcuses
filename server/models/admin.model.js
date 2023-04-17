const mongoose = require('mongoose')
const { Schema } = mongoose
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
const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        default: false
    }
    // {
    //     name: String, 
    //     password:  String,
    // }
})
const admin = mongoose.model('admin', adminSchema)
module.exports = admin;