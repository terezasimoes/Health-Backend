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

    return { user: user.ops[0] }

  } catch(error) { 
      console.error("createUser", error.message);
  }
}

module.exports = createUser;