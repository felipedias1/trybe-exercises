let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
  };
  console.log(`Bem-vinda, ${info['personagem']}!`);

  info.recorrente = 'sim';

  console.log(info);

  for(let key in info){
    console.log(key);  
  }

  for(let key in info){
    console.log(info[key]);  
  }

  for(let key in info && info2){
    if( key ==='recorrente') {
      if (info['recorrente'] === info2['recorrente']) {
      console.log(`Ambos recorrentes!`);
      break;
      }
    } 
    console.log(`${info[key]} e ${info2[key]}`);
  }