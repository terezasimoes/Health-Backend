const connection = require('./connection');


const getUser = async(email) => {
  try {
    const db = await connection();
    const userGot = await db.collection("users").findOne({ email });
    return userGot;
  } catch(error){
    return console.error("getUser", error.message )
    
  }
}

module.exports = getUser;