const express = require('express');
const router = require('./Routers/register');
require('dotenv/config');
const {PORT} = process.env;

const app = express();

app.use(express.json())

app.use('/register', router.register);

app.listen(PORT, console.log(`Server listening on port ${PORT}`));