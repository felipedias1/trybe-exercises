const readline = require("readline-sync");

const mensagem = (number, random) => {
  let msg = "";
  if( random === number) {
    msg = "Parabéns, número correto!"
  } else {
    msg = "Não foi dessa vez..."
  }
  return console.log(msg);
}

const verificaNumero = () => {
  const number = readline.questionInt('Escolha um numero de 0 a 10:');
  const random = Math.floor(Math.random() * 11);
  mensagem(number, random);
  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );
  if( novamente !== "s") return console.log("Ok, até a próxima!") 
  console.log(verificaNumero(number));
}

verificaNumero();

module.exports = { verificaNumero }