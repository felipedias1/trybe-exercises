let n = 8;
let linha="";
let asterisco = "*";
let valorN = n;

for (let i = 0; i < n; i += 1) {
     for (let j = 0; j <= n; j += 1) {
        if (j < valorN) {
        linha = linha + " ";        
      } else {
        linha = linha + asterisco;
      }; 
    }; 
    console.log(linha);
    linha = "";
    valorN -= 1   
};



/*
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};*/