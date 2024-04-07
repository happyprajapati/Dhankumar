const routes = require('express').Router();
const {loginUser} = require('../controllers/authController.js');
const { validateRegister, validateLogin } = require('../middlewares/validator.js');
const {getItems, getItem, addItem, createUser, placeOrder, paymentVarify, getUserItems} = require('./../controllers/userController.js')
const { itemImage } = require('../middlewares/upload.js');
const { varifyUser } = require('../middlewares/varifyUser.js');

// Register API
routes.post("/register", validateRegister, createUser);

// Login API
routes.post("/login", validateLogin, loginUser);

// Reset Password OTP API
// routes.post("/get-otp", getOtp);

// Get items API
routes.get("/getitems", getItems);

// Get item API
routes.get("/getitem/:id", getItem);

// Add item API
routes.post("/additem", itemImage.any("itemImg"), addItem);

// place order API
routes.post("/placeorder", placeOrder);

// payment varify API
routes.post("/varify", paymentVarify);

// Get user item API
routes.get("/getuseritems", getUserItems);

// Get user item API
routes.get("/getuseritems", getUserItems);

// routes.post("/send-token", sentResetPassToken);

// // Reset Password Email check API
// routes.get("/reset-password/:token", CheckResetEmail);

// // Reset Password API
// routes.post("/reset-pass", resetPass);

module.exports = routes;
