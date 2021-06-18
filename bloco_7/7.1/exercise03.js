const fatorial = num => {
  let sum = 0
  for (i=num; i > 0; i -= 1) {
    sum = sum + (i*sum);
  }
  return sum;
}

console.log(fatorial(4));
