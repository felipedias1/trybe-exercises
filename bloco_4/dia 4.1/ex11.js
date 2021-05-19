let salarioBruto = 6000;
let descontoInss;
let salarioMenosInss;
let descontoIr;
let salarioLiquido;

//aliquota INSS
if (salarioBruto<=1556.94){
  descontoInss = salarioBruto * 0.08;
} else if (salarioBruto>1556.95 && salarioBruto<=2594.92){
  descontoInss = salarioBruto * 0.09;
} else if (salarioBruto>2594.93 && salarioBruto<=5189.82){
  descontoInss = salarioBruto * 0.11;
} else {
  descontoInss = 570.88;
}

// salário após o desconto do INSS
salarioMenosInss = salarioBruto - descontoInss;

//aliquota IR
if (salarioBruto<=1903.98){
  descontoIR = 0;
} else if (salarioMenosInss>1903.99 && salarioMenosInss<=2826.65){
  descontoIR = (salarioMenosInss * 0.075);
  descontoIR -= 142.80;
} else if (salarioMenosInss>2826.66 && salarioMenosInss<=3751.05){
  descontoIR = (salarioMenosInss * 0.15);
  descontoIR -= 354.80;  
} else if (salarioMenosInss>3751.06 && salarioMenosInss<=4664.68){
  descontoIR = (salarioMenosInss * 0.225);
  descontoIR -= 636.13;
} else {
  descontoIR = (salarioMenosInss * 0.275);
  descontoIR -= 869.36;
}

// salário liquido
salarioLiquido = salarioMenosInss - descontoIR;

console.log(salarioBruto);
console.log(descontoInss);
console.log(descontoIR);
console.log(salarioLiquido);
