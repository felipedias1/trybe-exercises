const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

/* describe('Usuário foi encontrado', () => {
  it('retorna o usuário', () => {
    expect.assertions(1);
    return findUserById('4').then(user => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});
 */
module.exports = { getUserName }