let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = numbers.length; index >= 0; index -= 1) {
  for (let j = numbers.length + 1; j >= 0; j -= 1) {
    if (numbers[index] < numbers[j]) {
        let position = numbers[j];
        numbers[j] = numbers[index];
        numbers[index] = position;
    }
  }
}
console.log(numbers);