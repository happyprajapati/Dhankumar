const User = require("../models/users.js");
const { validationResult } = require("express-validator");

const loginUser = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email }).select("+password");
      if (user) {
        console.log(user.password, password);
        if (user.password === password) {
          return res.status(200).json({
            code: 200,
            msg: "Logged In Successfully.",
            success: true,
            data: {
              username: user.name,
              userId: user._id,
            },
          });
        }
        return res
          .status(200)
          .json({ code: 200, msg: "Invalid Credentials.", success: false });
      }
      return res
        .status(200)
        .json({ code: 200, msg: "User not found.", success: false });
    }else{
      return res
        .status(422)
        .json({ code: 422, msg: error.array(), success: false });
    }
  } catch (e) {
    return res.json({
      code: 200,
      msg: `Something went wrong: ${e}`,
      success: false,
    });
  }
};

module.exports = { loginUser };
