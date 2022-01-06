const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const user = require('./models/users.models')

app.get('/user', async(req, res) => {
  const books = await book.getAllUsers();
  res.status(200).json(books);
})

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const isValid = await verifyFields(firstName, lastName, email, password)

  if(!isValid) return res.status(400).json(isValid);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))