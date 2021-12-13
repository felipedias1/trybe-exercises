const fs = require('fs').promises;

const searchID = async (id) => {
  
  const array = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  console.log(array);
    const aux = array.find((simpson) => simpson.id === id);
    
    if(!aux) {
      throw new Error('Id não encontrado')
    }
}

searchID(1);