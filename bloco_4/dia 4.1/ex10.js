// valores de entrada
let custoProd = 5;
let valorProd = 10;
// calculos
let valorTotal = 1000 * valorProd;
let custoTotal = (1000 * custoProd) + (valorTotal * 0.2);
let lucro = valorTotal - custoTotal;

if(custoProd > 0 && valorProd > 0) {
  console.log(lucro);
} else {
  console.log("Erro: Valores informados menores que ZERO");
}

