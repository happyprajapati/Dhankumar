const mongoose = require("mongoose");
const jwt =require('jsonwebtoken');

const userSchema = mongoose.Schema({
  name: String ,
  email: {type:String,unique:true} ,
  password: {type:String,select:false} ,
  contact: Number ,
  role: {type:String,default:"user"},
},
{timestamps: true}
);

userSchema.method('generateAuthToken',function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token
})

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
