const numbers = [50, 85, -30, 3, 15];
let bigger=0

for (number in numbers) {
  (numbers[number] > bigger) ? bigger = numbers[number]: "";  
}

console.log(bigger);

const getbigger = (bigger, number) => (bigger > number) ? bigger : number;

console.log(numbers.reduce(getbigger,100));

/* const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85 */