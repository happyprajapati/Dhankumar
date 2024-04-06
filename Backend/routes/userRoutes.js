const routes = require('express').Router();
const {loginUser} = require('../controllers/authController.js');
const { validateRegister, validateLogin } = require('../middlewares/validator.js');
const {getItems, getItem, addItem, createUser} = require('./../controllers/userController.js')
const { itemImage } = require('../middlewares/upload.js');
const { varifyAuthToken } = require('../middlewares/varifyAuthToken.js');

// Register API
routes.post('/register', validateRegister, createUser);

// Login API
routes.post('/login', validateLogin, loginUser);

// Reset Password OTP API
// routes.post("/get-otp", getOtp);

// Get items API
routes.get("/getitems", getItems);

// Get item API
routes.get("/getitem/*", getItem);

// Add item API
routes.post("/additem", itemImage.array("itemImg"), varifyAuthToken , addItem);

// routes.post("/send-token", sentResetPassToken);

// // Reset Password Email check API
// routes.get("/reset-password/:token", CheckResetEmail);

// // Reset Password API
// routes.post("/reset-pass", resetPass);

module.exports = routes;