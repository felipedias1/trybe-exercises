let teste = {
  nome: 'Felipe',
  sobrenome: 'Dias',
}

console.log(teste);

teste.age = '29';

console.log(teste);

const tal = teste => {
  const skills = [];
  for(let i in teste) {
    skills.push(teste[i]);
  };
  return skills;
};

console.log(tal(teste));

console.log(Object.values(teste));

console.log(Object.entries(teste));

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
