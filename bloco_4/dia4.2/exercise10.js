let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let j = 0; j < index; j += 1) {
    if (numbers[index] < numbers[j]) {
        let position = numbers[index];
        numbers[index] = numbers[j];
        numbers[j] = position;
    }
  }
}
console.log(numbers);