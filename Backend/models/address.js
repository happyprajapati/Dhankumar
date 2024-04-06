const mongoose = require("mongoose");

const addSchema = mongoose.Schema({
  uid: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
  add: String ,
  pincode: Number ,
  city: String ,
  state: String ,
},
{timestamps: true}
);

const addModel = mongoose.model("address", addSchema);

module.exports = addModel;
