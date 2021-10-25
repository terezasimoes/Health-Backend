const createUserModel = require('../Models/createUser');
const jwt = require('jsonwebtoken');
require('dotenv/config');
const {SECRET_KEY} = process.env;



const userController = async(req, res) => {
  try {
    const data = req.body;

    const user = await createUserModel({ ...data })
    console.log(user)
    const token = jwt.sign({
      "userID": user._id,
      "name": `${data.firstName} ${data.lastName}`},
      SECRET_KEY, {expiresIn: "5d"}
    );
    
    data.token = token;

  return res.status(201).json(data);

  }catch {
    return res.status(400).json("Requisição mal sucedida");
  } 
}

module.exports = userController;