let testeArray = [2, 3, 6, 7, 10, 1]; 

function maiorValor(myArray) {
  
    let numMaior = 0;
    let indiceMaior = 0; 
    
    for(i = 0; i < myArray.length; i += 1) {
    numAtual = myArray[i];
      if (numAtual > numMaior) {
        numMaior = numAtual;
        indiceMaior = i;
      }
    }
    return indiceMaior;
  } 
  console.log(maiorValor(testeArray));