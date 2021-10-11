let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
  media = soma/numbers.length;
};

console.log(`Soma: ${soma}`);
console.log(`Média: ${media}`);

if (media > 20){
  console.log('A média é maior que 20!')
}else {
  console.log('A média é menor ou igual a 20!')
}