let n = 15
let res;
let contDiv = 0;

for (let i = 1; i <= n; i += 1) {
    res = n % i;
    if (res == 0){
        contDiv += 1 
    }
}

if (contDiv == 2){
    console.log("O número é primo!")
} else {
    console.log("O número NÃO é primo!")
}