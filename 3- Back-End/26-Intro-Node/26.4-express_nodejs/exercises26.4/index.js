const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const app = express();

app.use(bodyParser.json());

// 1 - Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (req, res, next) => {
  res.status(200).json({ message: 'pong' });
})

// 2- Crie uma rota POST /hello
//Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
//Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
app.post('/hello', (req, res, next) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!`});
});

//3- Crie uma rota POST /greetings
//Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
//Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
//Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
app.post('/greetings', (req, res, next) => {
  const { name, age } = req.body;
  if(parseInt(age, 10) >= 17) {
    return res.status(200).json({ message: `Hello, ${name}!`});
  }
  return res.status(401).json({message: "Unauthorized"})
});

//4- Crie uma rota PUT /users/:name/:age .
//Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
app.put('/users/:name/:age', (req, res, next) => {
  const { name, age } = req.params;
  return res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`})
});

//5- Crie uma API de dados das personagens de Simpsons
//Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
//Utilize o modulo fs do Node para ler/escrever arquivos.
//Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
//Caso dê tudo certo, a resposta deve voltar com status 200 OK .
//Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .
const simpsonsUtils = require('./fs-utils');

app.get('/simpsons', rescue(async (req, res, next) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  res.status(200).json(simpsons);
}))

app.get('/simpsons/:id', rescue(async (req, res, next) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  const { id } = req.params;

  const simpson = simpsons.find(simpson => simpson.id === id)
  
  if(!simpson) return res.status(404).json({message: "simpson not found"})
  res.status(200).json(simpson);
}))

app.post('/simpsons', rescue(async (req, res, next) => {
  const arr = await simpsonsUtils.getSimpsons();
  const { id, name } = req.body;

  const simpson = arr.find(simpson => simpson.id === id);

  if(simpson) return res.status(409).json({ message: 'id already exists' });
  
  arr.push({ id, name});
  await simpsonsUtils.setSimpsons(arr)

  res.status(204).end();
}))

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));