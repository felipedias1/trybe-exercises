let testeArray = [2, 2, 3, 3, 4, 4, 5, 5];

function maisCaracteres(myArray) {
    
    let contUm = 0;
    let contDois = 0;
    let numAtual = 0;
    let maisVezes = 0;
      
    for(i = 0; i < myArray.length; i += 1) {
    numAtual = myArray[i];
      for(j = 0; j < myArray.length; j += 1) {
        if(numAtual == myArray[j]) {
          contUm += 1;
        };
      };
      
      if (contUm >= contDois) {
        maisVezes = numAtual;
        contDois = contUm;
      };
      contUm = 0;
    };
    return maisVezes;
  };
  console.log(maisCaracteres(testeArray));