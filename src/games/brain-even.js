import runGame from '../engine.js';
import getRandomInt from '../utils/randomInt.js';

const isEven = (number) => number % 2 === 0;

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuiz = () => {
  const number = getRandomInt(0, 30);
  const answer = isEven(number) ? 'yes' : 'no';

  return { question: number, correctAnswer: answer };
};

export default () => runGame(mission, makeQuiz);
