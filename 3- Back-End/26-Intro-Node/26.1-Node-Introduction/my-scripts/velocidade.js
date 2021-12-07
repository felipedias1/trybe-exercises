const readline = require("readline-sync");

const velocidadeMédia = () => {
  const distancia = readline.questionInt('Qual é a distância?(em metros)');
  const tempo = readline.questionInt('Qual é o tempo?(em segundos) ');
  const result = distancia/tempo;
  return console.log(result);
}

velocidadeMédia();

module.exports = { velocidadeMédia }