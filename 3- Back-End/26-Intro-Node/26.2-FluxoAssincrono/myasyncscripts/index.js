const calc = (a,b,c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject('Informe apenas números');
    }
    const result = (a + b) * c;

    if(result < 50) { reject("Valor baixo") };

    resolve(result)
  })
} 

const main = async () => {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);
  
  try{
    const res = await calc(a, b, c)
    console.log(res);
  } catch(e) {
    console.log(e);
  }
}

main();
