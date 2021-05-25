let n = 20;
let sum = 0;

function soma(number) {
  for(i = 0; i <= n; i += 1) {
    sum = sum + i;
  };
  return sum;
};
console.log(soma(n));