const { ObjectId } = require('bson');
const connection = require('./connection');

const createUser = async ({
  firstName,
  lastName,
  birthdate,
  addresses,
  email,
  role = "user"
}) => {
  try {
    const db = await connection();
    const userCreated = await db.collection("users").insertOne({ 
      firstName,
      lastName,
      birthdate,
      addresses,
      email,
      role
    });

    return { user: { 
      firstName,
      lastName,
      birthdate,
      addresses,
      email,
      role,
      _id: ObjectId(userCreated._id).toString()
    } }

  } catch(error) { 
      console.error("createUser", error.message);
  }
}

module.exports = createUser;