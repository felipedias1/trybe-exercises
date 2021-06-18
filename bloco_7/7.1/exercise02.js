const oddsAndEvens = [13, 3, 4, 10, 7, 2];

/* const growing = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens;
}
/* growing(); 

console.log(oddsAndEvens.sort((a, b) => a - b)) */

const grow = array => {
  const sortedArray = array.sort((a, b) => a - b);
  return sortedArray;
}

const sortedArrayBonus = grow(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);