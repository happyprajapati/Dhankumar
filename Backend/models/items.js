const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: String ,
  price: Number ,
  brand: String ,
  desc: String ,
  category: String ,
  img: Array,
},
{timestamps: true}
);

const ItemModel = mongoose.model("user", itemSchema);

module.exports = ItemModel;
