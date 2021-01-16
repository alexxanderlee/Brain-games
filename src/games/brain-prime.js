import runGame from '../engine.js';
import getRandomInt from '../utils/randomInt.js';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeQuiz = () => {
  const number = getRandomInt(0, 30);
  const answer = isPrime(number) ? 'yes' : 'no';

  return { question: number, correctAnswer: answer };
};

export default () => runGame(mission, makeQuiz);
