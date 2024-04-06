const bcrypt = require("bcrypt");
const User = require("../models/user");
const { validationResult } = require("express-validator");

const loginUser = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email }).select('+password');
      if (user) {
        // if(user.isVerified == false) return res.status(200).json({ success: false, data: { message: "Please verify your email." } })
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          return res.status(200).json({
            success: true,
            data: {
              message: "Logged In Successfully.",
              authToken: user.generateAuthToken(),
            //   role: user.role,
            },
          });
        }
        return res
          .status(200)
          .json({ success: false, data: { message: "Invalid Credentials." } });
      }
      return res
        .status(200)
        .json({ success: false, data: { message: "User Not Found." } });
    }
    return res
      .status(422)
      .json({ success: false, data: { error: error.array() } });
  } catch (e) {
    return res.json({ success: false, data: { error: e } });
  }
};

module.exports = { loginUser };
