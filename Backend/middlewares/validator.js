const User = require('./../models/users.js')
const {body} = require('express-validator');

const validateRegister = [
    body('email').isEmail().withMessage('Email must be a valid email !!')
    .custom(async(emailval)=>{
        const checkEmail = await User.findOne({email:emailval})
        if(checkEmail){
            throw new Error('Email already exists !!')
        }
    }),
    body('password').isLength({min: 8}).withMessage('The minimum password length is 8 characters'),
    body('name').isLength({min: 3}).withMessage('Name must be greater than 3'),
    body('contact').isLength({min: 10,max: 10}).withMessage('Contact length must be 10 characters'),
]

const validateLogin = [
    body('email').isEmail().withMessage('Email must be a valid email !!'),
    body('password').isLength({min: 8}).withMessage('The minimum password length is 8 characters'),
]

const validateApllication = [
    body('duration').custom((value)=>{
        if(value > 1 || value < 12){
            throw new Error('Duration must be between 1 and 12')
        }
    }),
]

module.exports = {validateRegister,validateLogin,validateApllication}