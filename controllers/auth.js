const User=require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')
const bcrypt=require('bcryptjs')
const login=(req,res)=>{
    res.send('sign user');
}
const register=async (req,res)=>{
  
    const user=await User.create({...req.body})
    console.log(user);
    res.status(StatusCodes.CREATED).json({user})
  
}
module.exports={
    login,register
}