const readline = require("readline-sync");
/* const { CalcIMC } = require('./imc');
const { verificaNumero } = require('./sorteio');
const { velocidadeMédia } = require('./velocidade'); */

const escolhaOpcao = () => {
  const option = readline.questionInt(
  ' \n 1- imc \n 2- sorteio \n 3- velocidade \n Escolha a opção desejada: ',
  );
  let aux = "";
  if(option === 1) {
    aux = 'imc'
  } else if(option === 2) {
    aux = 'sorteio'
  } else if(option === 3) {
    aux = 'velocidade'
  } else {
    console.log("Número Invalido!")
  }
  require(`./${aux}`)
}

escolhaOpcao();

/* module.exports = { funcionalidade1, funcionalidade2 }; */