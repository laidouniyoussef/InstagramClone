const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:String,
    expireToken:Date,
    pic:{
     type:String,
     default:"https://res.cloudinary.com/drqqagbhm/image/upload/v1627342083/1024px-Placeholder_no_text.svg_rlkesl.png"
    },
    followers:[{type : ObjectId, ref:"User"}],
    following:[{type : ObjectId, ref:"User"}],
})

mongoose.model("User", userSchema)