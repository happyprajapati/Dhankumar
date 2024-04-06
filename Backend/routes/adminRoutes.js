const routes = require('express').Router();
const { getUsers, getItemCount, getUserCount } = require('../controllers/adminController.js');
const { varifyAuthToken } = require('../middlewares/varifyUser.js');

// GET Users API
routes.get('/getusers', getUsers);

// GET Users count API
routes.get('/getuserscount', getUserCount);

// GET Items count API
routes.get('/getitemscount', getItemCount);

module.exports = routes;
