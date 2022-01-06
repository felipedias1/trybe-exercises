const connection = require('./connectionSQL');

const getAll = async() => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books');
  return books 
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE id=?', [id]);
  return books;
};

const newBook = async (id, title, authorId) => {
  const [newBook] = await connection.execute(
    'INSERT INTO model_example.books(id, title, author_id) VALUES (?, ?, ?)', [id, title, authorId]);
  return newBook;
};

const validateNewBook = async (id, title, authorId) => {
  if ( title === '' || title.length < 3) return false
  const checkAuthor = await getByAuthorId(authorId)
  if ( checkAuthor.length === 0 || id === "") return false

  return true;
}

module.exports = {
  getAll,
  getByAuthorId,
  newBook,
  validateNewBook,
}