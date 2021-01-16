import runGame from '../engine.js';
import getRandomInt from '../utils/randomInt.js';

const getRandomProgression = () => {
  const PROGRESSION_LENGTH = 10;

  const progression = [];
  const initialTerm = getRandomInt(0, 30);
  const difference = getRandomInt(1, 10);

  for (let step = 1; step <= PROGRESSION_LENGTH; step += 1) {
    progression.push(initialTerm + (step - 1) * difference);
  }
  return progression;
};

const mission = 'What number is missing in the progression?';

const makeQuiz = () => {
  const progression = getRandomProgression();
  const missingElementPosition = getRandomInt(0, 9);
  const answer = progression[missingElementPosition];
  progression[missingElementPosition] = '..';
  const progressionString = progression.join(' ');

  return { question: progressionString, correctAnswer: answer };
};

export default () => runGame(mission, makeQuiz);
