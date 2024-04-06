const User = require('./../models/users')
const Item = require('./../models/items')

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.json({ code: 200, success: true, data: users });
    } catch (error) {
        return res.json({
            code: 500,
            msg: "Something went wrong !!",
            success: false,
          });
    }
}

const getUserCount = async (req, res) => {
    try {
        const users = await User.find()
        return res.json({ code: 200, success: true, data: users.length });
    } catch (error) {
        return res.json({
            code: 500,
            msg: "Something went wrong !!",
            success: false,
          });
    }
}

const getItemCount = async (req, res) => {
    try {
        const items = await Item.find()
        return res.json({ code: 200, success: true, data: items.length });
    } catch (error) {
        return res.json({
            code: 500,
            msg: "Something went wrong !!",
            success: false,
          });
    }
}

module.exports = {
    getUsers,
    getUserCount,
    getItemCount,
  };
  