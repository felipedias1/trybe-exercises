let testeArray = [2, 3, 2, 5, 8, 2, 3];

function maisCaracteres(myArray) {
    
    let contUm = 0;
    let contDois = 0;
    let numAtual = 0;
    let maisVezes = 0;
      
    for(i = 0; i < myArray.length; i += 1) {
    numAtual = myArray[i];
      for(i = 0; i < myArray.length; i += 1) {
        if(numAtual == myArray[i]) {
          contUm += 1;
        };
      };
      
      if (contUm > contDois) {
        maisVezes = numAtual;
        contDois = contUm;
      };
      contUm = 0;
    };
    return maisVezes;
  };
  console.log(maisCaracteres(testeArray));