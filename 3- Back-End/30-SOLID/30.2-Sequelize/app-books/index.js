require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const bookController = require('./controllers/bookController')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/book', bookController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
