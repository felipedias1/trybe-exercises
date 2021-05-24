
let n = 7;
let linha="";
let asterisco = "*";

let divideN;
let cont = 0;

divideN = ((n + 1) / 2)

for (let i = 1; i <= divideN; i += 1) {
     
    for (let j = 1; j <= n; j += 1) {
			  if (j == divideN - cont || j == divideN + cont || i == divideN) {
				  linha = linha + asterisco;
        } else {
         	linha = linha + " ";
        };
    }; 
    console.log(linha);
    linha = "";
    cont += 1
}; 




