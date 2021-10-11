// verifique a chamada do callback de uma função uppercase

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('testando minusculas para maiusculas', (done) => {
  uppercase('felipe', (str) => { 
    expect(str).toBe('FELIPE');
    done();
    });
  });
