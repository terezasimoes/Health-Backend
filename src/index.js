const express = require('express');
const router = require('./Routers/register');

const app = express();

app.use(express.json())

app.use('/register', router.register);

app.listen(3000, console.log(`Server listening on port ${3000}`));