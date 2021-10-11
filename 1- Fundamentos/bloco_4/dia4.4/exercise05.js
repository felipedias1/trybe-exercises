let testeArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maisCaracteres(myArray) {
    
    let nomeAtual = "";
    let nomeMaior = "";
      
    for(i = 0; i < myArray.length; i += 1) {
    nomeAtual = myArray[i];
      if (nomeAtual.length > nomeMaior.length) {
        nomeMaior = nomeAtual;
      };
    };
    return nomeMaior;
  };
  console.log(maisCaracteres(testeArray));