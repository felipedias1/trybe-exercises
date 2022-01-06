// models_SQL/connection.js -- usando o SQL

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'trybe123',
  host: 'localhost',
  database: 'model_example',
});

module.exports = connection


