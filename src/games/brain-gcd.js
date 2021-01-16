import runGame from '../engine.js';
import getRandomInt from '../utils/randomInt.js';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const mission = 'Find the greatest common divisor of given numbers.';

const makeQuiz = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const answer = getGCD(num1, num2);

  return { question: `${num1} ${num2}`, correctAnswer: answer };
};

export default () => runGame(mission, makeQuiz);
