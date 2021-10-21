const {Router} = require('express');

const register = Router();

register.post('/',(req, res) => {
  try {
    const data = req.body;
    return res.status(201).json("Requisição bem sucedida");
  }catch {
    return res.status(400).json("Requisição mal sucedida");
  } 
});