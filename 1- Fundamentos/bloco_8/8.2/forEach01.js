/* const button = document.getElementById('button');
button.addEventListener('click', () => {
  console.log('Clicou no botão!');
}); */

/* const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((param1, param2, param3) => {
  console.log('Index, posição do elemento:', param1);
  
  console.log('Cada elemento do array:', param2);
  
  console.log('Array percorrido:', param3);
}); */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);

console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]