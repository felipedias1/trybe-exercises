let x = 18;
let y = 19;
let z = 19;

if (x>y && x>z) {
    console.log(x);
}

else if (y>x && y>z) {
    console.log(y);
}

else if (z>x && z>y) {
    console.log(z);
}

else {
    console.log("Dois ou mais números são iguais!");
}