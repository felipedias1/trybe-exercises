const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  /* const nameFull = firstName, middleName, lastName
  console.log(nameFull); */
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
   };
  };

  const getAll = async () => {
    return connection()
      .then((db) => db.collection('authors').find().toArray())
      .then((authors) =>
        authors.map(({ _id, firstName, middleName, lastName }) =>
          getNewAuthor({
            id: _id,
            firstName,
            middleName,
            lastName,
          })
        )
    );
  }

  const findById = async (id) => {
    if (!ObjectId.isValid(id)) {
      return null;
    }
  
    const authorData = await connection()
      .then((db) => db.collection('authors').findOne(new ObjectId(id)));
  
    if (!authorData) return null;
  
    const { firstName, middleName, lastName } = authorData;
  
    return getNewAuthor({ id, firstName, middleName, lastName });
  };

  const isNonEmptyString = (value) => {
    if (!value) return false;
  
    return typeof value === 'string';
  };

  const isValid = (firstName, middleName, lastName) => {
    if (middleName && typeof middleName !== 'string') return false;
  
    return isNonEmptyString(firstName) && isNonEmptyString(lastName);
  };

  const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};