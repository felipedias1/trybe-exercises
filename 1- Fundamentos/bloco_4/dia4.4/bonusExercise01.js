numerosRomanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50, 
  C: 100,
  D: 500,
  M: 1000
}

testeArray = ["X", "X", "V"]

function traduzRomanos(myArray) {
  num = "";
  for (let i = 0; i < myArray.length; i++) {
    
    for (let key in numerosRomanos){
      
      if (numerosRomanos[key] == myArray[i]) {
        num = num + numerosRomanos[key] 
      }

    }    
      
  }
return num;
}
console.log(traduzRomanos(testeArray));

