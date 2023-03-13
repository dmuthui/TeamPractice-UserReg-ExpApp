const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
   names:{type: String, required:true},
   gender:{type: String, required:true},
   contact:{type: Number, required:true, unique:true},
   residence:{type: String, required:true},
   email:{type: String, required:true, unique:true},
   password:{type: String, required:true},
   
});
module.exports = mongoose.model('User', userSchema)

