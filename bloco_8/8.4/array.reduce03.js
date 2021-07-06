const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const even = (number) => number % 2 === 0;
const sumEven = (number, sum) => sum += number;
const sumNumbers= array => array.filter(even).reduce(sumEven);

console.log(sumNumbers(numbers));