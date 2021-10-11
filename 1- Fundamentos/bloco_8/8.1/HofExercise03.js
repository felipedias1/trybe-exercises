const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answers = (template, aswers, func) => {
  console.log(func(template, aswers))
}

const verifyAnswers = (template, aswers) => {
  let sum = 0
  for (let index = 0; index < template.length; index++) {
    for (let index2 = index; index2 <= index; index2++){
      if (aswers[index2] === 'N.A') {
        sum = sum
      }
      else if (template[index] === aswers[index2]) {
        sum += 1;
      } else {
        sum -= 0.5;
      }
    }
  }
  return sum;
}

answers(rightAnswers, studentAnswers,verifyAnswers);
