/* const sum = (a, b) => a + b;

const sayHello = () => {
  console.log('hello trybers');
}

setTimeout(sayHello, 1000);

const sumFixAmount = (amount) => {
  return (number) => amount + number;
} */

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});