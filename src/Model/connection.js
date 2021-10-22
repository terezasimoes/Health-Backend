const mongoClient = require('mongodb').MongoClient;


const MONGO_DB_URL = 'mongodb://mongodb:27017/Users';

const DB_NAME = 'Users';

const connection = () =>
  mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connec) => connec.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

module.exports = connection;