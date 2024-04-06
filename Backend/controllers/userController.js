const User = require("./../models/users.js");
const item = require("./../models/items");
const Razorpay = require("razorpay");

const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
  key_id: RAZORPAY_ID_KEY,
  key_secret: RAZORPAY_SECRET_KEY,
});

const createUser = async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;
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
      msg: "Something went wrong !!",
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
    const newItem = new item({
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
      msg: "Something went wrong !!",
      success: false,
    });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await item.find();
    return res.json({ code: 200, data: items, success: true });
  } catch (error) {
    return res.json({
      code: 500,
      msg: "Something went wrong !!",
      success: false,
    });
  }
};

const getItem = async (req, res) => {
  try {
    const item = await item.findById(req.params.id);
    return res.json({ code: 200, data: item, success: true });
  } catch (error) {
    return res.json({
      code: 500,
      msg: "Something went wrong !!",
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
          return res.json({ code: 200, success: true, msg: "Order Created", order_id:order.id, amount: amount, key_id: RAZORPAY_ID_KEY, product_name: name  });
        }else{
          return res.json({
            code: 500,
            msg: "Something went wrong !!",
            success: false,
          });
        }
      }
    );
    return res.json({ code: 200, data: payment, success: true });
  } catch (error) {
    return res.json({
      code: 500,
      msg: "Something went wrong !!",
      success: false,
    });
  }
};

module.exports = {
  createUser,
  getItems,
  getItem,
  addItem,
};
