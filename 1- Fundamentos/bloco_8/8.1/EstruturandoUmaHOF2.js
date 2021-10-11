const wake = () => 'Acordando!!'
const coffee = () => 'Bora tomar café!!'
const sleep = () => 'Partiu dormir!!'

const doingThings = func => console.log(func())

/* console.log(doingThings(func()));

doingThings(wake); */

doingThings(wake);
doingThings(coffee);
doingThings(sleep);
