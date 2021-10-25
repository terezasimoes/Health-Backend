const {Router} = require('express');
const userController = require('../Controllers/userController')


const register = Router();

register.post ('/', userController);

module.exports = {register};