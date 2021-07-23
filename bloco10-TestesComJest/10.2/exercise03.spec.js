const { getUserName } = require('./exercise02');

describe('testa as funções com Async/Await', () => {
  expect.assertions(1)

  it('user exists', async () => {
    const data = await getUserName(5)
    expect(data).toEqual('Paul')
  })

  it('user does not exists', async () => {
    try{
      await getUserName(2)
    } catch (error){
      expect(error).toEqual({ error: 'User with ' + 2 + ' not found.' })
    }
  })

})