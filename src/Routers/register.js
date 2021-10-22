const {Router} = require('express');
const jwt = require('jsonwebtoken');

const register = Router();

register.post('/',(req, res) => {
  try {
    const data = req.body;
    const token = jwt.sign({
      "userID": 1, "name": `${data.firstName} ${data.lastName}`},
      "nasa", {expiresIn: "5d"});
    
    data.token = token;


    return res.status(201).json(data);
  }catch {
    return res.status(400).json("Requisição mal sucedida");
  } 
});

module.exports = {register};