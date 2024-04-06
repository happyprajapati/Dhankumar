const { loginUser } = require('./../controllers/authController');
const {validateLogin} = require('./../middlewares/validator');

const routes = require('express').Router();

routes.get('/login', validateLogin, loginUser);

module.exports = routes;