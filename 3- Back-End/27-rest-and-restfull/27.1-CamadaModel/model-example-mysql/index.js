const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 3000;

/* const author = require('./models_SQL/Author')
const book = require('./models_SQL/Book') */

const author = require('./models_MONGO/AuthorModel')
const book = require('./models_MONGO/BookModel') 

app.get('/authors', async (_req, res) => {
  const authors = await author.getAll();
  res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await book.getAll();
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const bookSearch = await book.getByBookId(id);
  if (bookSearch.length === 0) {
    return res.status(404).json({ message: 'Not found' });
  } 
  res.status(200).json(bookSearch);
});

app.post('/books', async (req, res) => {
  const { id, title, author_id } = req.body;

  const isValid = await book.validateNewBook(title, author_id)
  if (!isValid ) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  
  await book.newBook(id, title, author_id);
  
  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))