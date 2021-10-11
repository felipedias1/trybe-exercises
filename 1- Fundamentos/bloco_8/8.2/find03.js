/* Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista: */

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const NameFiveLetters = () => names.find((name) => name.length === 5)

console.log(NameFiveLetters());