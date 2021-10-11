const { getUserName } = require('./exercise02');

describe ('Testes para encontrar Usuário', () => {
  expect.assertions(1);

  it ('Usuário existe', () => {
    return getUserName('4').then(user => {
      expect(user).toEqual('Mark')
    })
  }) 

  it ('Usuário NÃO existe', () => {
    expect.assertions(1);
    return getUserName('3').catch(error => {
      expect(error).toEqual({ error: 'User with ' + 3 + ' not found.' })
    })
  }) 
}) 