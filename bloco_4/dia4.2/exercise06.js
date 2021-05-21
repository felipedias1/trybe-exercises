let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let testeImpar = 0;
let numeroImpar = 0;


for (let i = 0; i < numbers.length; i += 1) {
  testeImpar = numbers[i] % 2;

  if (testeImpar !== 0) {
    numeroImpar += 1;
  };
};

if (numeroImpar > 0){
  console.log(`O array possui ${numeroImpar} números impares!`);
} else {
  console.log(`Nenhum valor ímpar encontrado!`);
}

