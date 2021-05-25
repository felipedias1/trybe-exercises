let testeArray = [2, 4, 6, 7, 10, 0, -3];  

function menorValor(myArray) {
  
    let numMenor = 0;
    let indiceMenor = 0; 
    
    for(i = 0; i < myArray.length; i += 1) {
    numAtual = myArray[i];
      if (numAtual < numMenor) {
        numMenor = numAtual;
        indiceMenor = i;
      }
    }
    return indiceMenor;
  } 
  console.log(menorValor(testeArray));