const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userid: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
  itemid: {type: mongoose.Schema.Types.ObjectId, ref: "items"},
},
{timestamps: true}
);

const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;
