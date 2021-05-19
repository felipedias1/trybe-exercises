// desafio 1 -- variáveis
const nome = "Felipe";
const birthCity = "Barra Mansa";
let birthYear = 1991;
birthYear = 2030;
//birthCity = "Volta Redonda";

console.log(nome, birthCity, birthYear);

// desafio 2 -- typeof
let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId, typeof isEnrolled, typeof patientInfo, typeof patientEmail);
console.log(typeof patientAge);

let base = 5;
let altura = 8;
let area = base*altura;
let perimetro = base + altura + base + altura;

console.log(base);
console.log(altura);
console.log(area);
console.log(perimetro);

// desafio 3 -- if/else

let nota = 55

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
} 

else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
}

else {
    console.log("Você foi reprovada(o)!");
}

// desafio 4 -- switch case

let resultado = 'não definido';

switch (resultado) {
  case "aprovada":
    console.log("aprovada!")
    break;

  case "lista":
    console.log("lista!")
    break;

  case "reprovada":
    console.log("reprovada!")
    break;
    
  default: 
    console.log("não se aplica!")
    break;
}