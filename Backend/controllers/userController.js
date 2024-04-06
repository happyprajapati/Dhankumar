const User = require("./../models/users.js");
const item = require("./../models/items");

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
}

const addItem = async (req, res) => {
  try {
    const { name, price, brand, desc, category } = req.body;
    const photos = [];
    req.files.map(async (photo) => {
      photos.push(photo.filename);
    });
    const newItem = new item({
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

module.exports = {
  createUser,
  getItems,
  addItem,
};
