const createUserModel = require('../Models/createUser');
const getUserModel = require('../Models/getUser');
const jwt = require('jsonwebtoken');
require('dotenv/config');
const {SECRET_KEY} = process.env;


const userController = async(req, res) => {
  try {
    const data = req.body;

    if( !(data.firstName && data.lastName && data.birthdate && data.addresses && data.email)) {
      return res.status(400).json("Todos os atributos são obrigatórios");
    }

    const getUser = await getUserModel(data.email)
    if(getUser) {
      return res.status(400).json("Usuário já existe");
    }

    const user = await createUserModel({ ...data })
    console.log(user)
    const token = jwt.sign({
      "userID": user._id,
      "email": `${data.email}`},
      SECRET_KEY, {expiresIn: "5d"}
    );
    
    data.token = token;

  return res.status(201).json(data);

  }catch {
    return res.status(400).json("Requisição mal sucedida");
  } 
}

module.exports = userController;