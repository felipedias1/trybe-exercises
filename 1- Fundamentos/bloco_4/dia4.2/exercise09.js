let numbers = [];
let division = [];

for (let i = 0; i < 25; i += 1) {
  numbers.push(i+1);
  division.push(numbers[i] / 2);
  console.log(division[i]);
};

console.log(division);

/* let numbers = [];
let division = [];

for (let i = 0; i < 26; i += 1) {
  numbers.push(i)
  division.push(numbers[i] / 2);
  console.log(division[i]);
};

console.log(division); */