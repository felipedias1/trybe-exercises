const connection = require('./connectionMONGO');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

const getAll = async() => {
  try {
    const connect = await connection();
    const query = connect.collection('authors').find().toArray();
    return query;
  } catch (error) {
    console.error('Internal Error: ', error.message);
    return res.status(500).json({message: "error"})
  }
};

module.exports = {
  getAll,
}