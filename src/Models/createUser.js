const { ObjectId } = require('bson');
const connection = require('./connection');

const createUser = async ({
  firstName,
  lastName,
  birthdate,
  addresses,
  role = "user"
}) => {
  try {
    const db = await connection();
    const user = await db.collection("users").insertOne({ 
      firstName,
      lastName,
      birthdate,
      addresses,
      role
    });

    return { user: { 
      firstName,
      lastName,
      birthdate,
      addresses,
      role,
      _id: ObjectId(user._id).toString()
    } }

  } catch(error) { 
      console.error("createUser", error.message);
  }
}

module.exports = createUser;