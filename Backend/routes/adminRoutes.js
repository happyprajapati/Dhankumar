const routes = require('express').Router();
const { getUsers } = require('../controllers/adminController.js');
const { varifyAuthToken } = require('../middlewares/varifyAuthToken.js');

// GET Users API
routes.get('/getusers', getUsers);

module.exports = routes;
