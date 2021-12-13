const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((arr) => {
    return arr.map(({id, name}) => `${id} - ${name}`);
  })
  .then((simpsons) => {
    return simpsons.forEach((simpson) => {
      console.log(simpson);
    })
  })