import runGame from '../engine.js';
import getRandomInt from '../utils/randomInt.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const index = getRandomInt(0, 2);
  return operations[index];
};

const calculate = (a, b, oper) => {
  switch (oper) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;

    default:
      return null;
  }
};

const mission = 'What is the result of the expression?';

const makeQuiz = () => {
  const arg1 = getRandomInt(0, 20);
  const arg2 = getRandomInt(0, 20);
  const oper = getRandomOperation();
  const answer = calculate(arg1, arg2, oper);

  return { question: `${arg1} ${oper} ${arg2}`, correctAnswer: answer };
};

export default () => runGame(mission, makeQuiz);
