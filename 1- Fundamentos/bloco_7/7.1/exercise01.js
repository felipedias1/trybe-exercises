const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo fui utilizada no escopo "`;
    console.log(ifScope);
  } else {
    console.log('Não devo ser utilizada fora meu escopo (else)');
  }
}
testingScope(true);

const abc = [1,2,3]

console.log(typeof abc)