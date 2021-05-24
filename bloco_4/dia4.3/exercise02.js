let n = 5;
let linha = [];

for (let i = 0; i < n; i += 1) {
  linha = [];
  for (let j = n; j >= n - i; j -= 1) {
    linha.push("*");    
  };
  console.log(linha);
};
