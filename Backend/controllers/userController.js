const User = require("./../models/users.js");
const Item = require("./../models/items");
const Order = require("./../models/orders");
const Address = require("./../models/address");
const Razorpay = require("razorpay");

// const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
  key_id: "rzp_test_MytonBdlQQC79x",
  key_secret: "LMyTuzcrjxYGilP394lXZxcD",
});

const createUser = async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;
    const checkEmail = await User.findOne({email:emailval})
    if(checkEmail){
      throw new Error('Email already exists !!')
    }
    const user = new User({ name, email, password, contact });
    await user.save();
    return res.json({
      code: 200,
      msg: "User created successfully !!",
      success: true,
    });
  } catch (error) {
    return res.json({
      code: 500,
      msg: `Something went wrong: ${error}`,
      success: false,
    });
  }
};

const addItem = async (req, res) => {
  try {
    const { uid, name, price, brand, desc, category } = req.body;
    const photos = [];
    req.files.map(async (photo) => {
      photos.push(photo.filename);
    });
    const newItem = new Item({
      uid,
      name,
      price,
      brand,
      desc,
      category,
      img: photos,
    });
    await newItem.save();
    return res.json({
      code: 200,
      msg: "Item added successfully !!",
      success: true,
    });
  } catch (error) {
    return res.json({
      code: 500,
      msg: `Something went wrong: ${error}`,
      success: false,
    });
  }
};

const getItems = async (req, res) => {
  try {
    await Item.find({}, { projection: { _id: 0, name: 1, price: 1, brand: 0, desc: 0, category: 0, img:1 }}).limit(10).toArray(function(err, result) {
      if (!err){
        return res.json({ code: 200, success: true, data: result })
      }
      return res.json({
      code: 500,
      msg: `Something went wrong !!`,
      success: false,
      })
    });
  } catch (error) {
    return res.json({
      code: 500,
      msg: `Something went wrong: ${error}`,
      success: false,
    });
  }
};

const getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    return res.json({ code: 200, success: true, data: item });
  } catch (error) {
    return res.json({
      code: 500,
      msg: `Something went wrong: ${error}`,
      success: false,
    });
  }
};

const placeOrder = async (req, res) => {
  try {
    const amount = req.body.amount * 100;
    const { name } = req.body.name;
    const options = {
      amount,
      currency: "INR",
      receipt: "razorUser@gmail.com",
    };

    const payment = await razorpayInstance.orders.create(
      options,
      (err, order) => {
        if (!err) {
          return res.json({
            code: 200,
            success: true,
            msg: "Order Created",
            order_id: order.id,
            amount: amount,
            key_id: "rzp_test_MytonBdlQQC79x",
            product_name: name,
          });
        } else {
          return res.json({
            code: 500,
            msg: `Something went wrong: ${error}`,
            success: false,
          });
        }
      }
    );
    return res.json({ code: 200, data: payment, success: true });
  } catch (error) {
    return res.json({
      code: 500,
      msg: `Something went wrong: ${error}`,
      success: false,
    });
  }
};

const getUserItems = async (req, res) => {
  try {
    const items = await Item.find({ uid: req.body.id });
    return res.json({ code: 200, success: true, data: items });
  } catch (error) {
    return res.json({
      code: 500,
      msg: `Something went wrong: ${error}`,
      success: false,
    });
  }
}

const getUserSellItems = async (req, res) => {
  try {
    const orders = await Order.find({ itemid: req.body.id });
    var sellProducts = [];
    orders.map(async (order) => { 
      var addess = await Address.find({ uid: order.userid });
      var user = await User.findById(order.userid);
      sellProducts.push({
        user: user.name,
        address: addess,
      })
    })
    return res.json({ code: 200, success: true, data: sellProducts });
  } catch (error) {
    return res.json({
      code: 500,
      msg: `Something went wrong: ${error}`,
      success: false,
    });
  }
}

module.exports = {
  createUser,
  getItems,
  getItem,
  addItem,
  placeOrder,
  getUserItems,
  getUserSellItems
};
