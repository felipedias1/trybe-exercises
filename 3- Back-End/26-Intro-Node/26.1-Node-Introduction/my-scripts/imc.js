/* Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
A fórmula para calcular o IMC é peso / altura ^ 2 .
Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
Armazene o script no arquivo imc.js . */
const readline = require("readline-sync");

const CalcIMC = () => {
  const peso = readline.questionFloat('Qual seu peso? ');
  let altura = readline.questionInt('Qual sua altura? ');
  let msg = "";
  altura = altura / 100;
  const result = peso/(altura*altura);

  if (result < 18,5) { msg = "Abaixo do peso (magreza)"; }
  if (result >= 18,5 && result <= 24,9) { msg = "Peso normal"; }
  if (result > 24,9 && result <= 29,9) { msg = "Acima do peso (sobrepeso)"; }
  if (result > 24,9 && result <= 29,9) { msg = "Acima do peso (sobrepeso)"; }
  if (result > 29,9 && result <= 34,9) { msg = "Obesidade grau I"; }
  if (result > 34,9 && result <= 39,9) { msg = "Obesidade grau II"; }
  else { msg = "Obesidade graus III e IV"; }

  return console.log(msg);
}

CalcIMC();

module.exports = { CalcIMC }