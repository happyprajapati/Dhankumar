const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String ,
  email: {type:String,unique:true} ,
  password: {type:String,select:false} ,
  contact: Number ,
  role: {type:String,default:"user"},
},
{timestamps: true}
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
