const User = require('./../models/users')

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.json({ code: 200, data: users, success: true });
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
  };
  