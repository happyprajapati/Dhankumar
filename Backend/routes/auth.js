const { loginUser } = require('./../controllers/authController');
const {validateLogin} = require('./../middlewares/validator');

const routes = require('express').Router();

routes.post('/login', validateLogin, loginUser);

module.exports = routes;