const connection = require('./connectionMONGO');
const { ObjectId } = require('mongodb');

const getAll = async() => {
  const connect = await connection();
  const query = connect.collection('books').find().toArray();
  return query;
};

const getByBookId = async (id) => {
  const connect = await connection();
  const query = connect.collection('books').findOne(new ObjectId(id));
  return query;
};

const getByAuthorId = async (id) => {
  const connect = await connection();
  const query = connect.collection('authors').findOne(new ObjectId(id));
  return query;
};

const newBook = async (_id, title, authorId) => {
  const connect = await connection();
  const { insertedId } = connect.collection('books')
    .insertOne({
      title, 
      authorId
    });
  return insertedId;
  /* const [newBook] = await connection.execute(
    'INSERT INTO model_example.books(id, title, author_id) VALUES (?, ?, ?)', [id, title, authorId]);
  return newBook; */
};

const validateNewBook = async (title, authorId) => {
  if ( title === '' || title.length < 3) return false
  if ( authorId.length !== 24 || typeof authorId !== 'string') return false

  return true;
}

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId,
  newBook,
  validateNewBook,
}