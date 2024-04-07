const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  uid: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
  name: String ,
  price: Number ,
  brand: String ,
  desc: String ,
  category: String ,
  img: [],
},
{timestamps: true}
);

const ItemModel = mongoose.model("items", itemSchema);

module.exports = ItemModel;
