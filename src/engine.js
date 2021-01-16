import readlineSync from 'readline-sync';
import greeting from './cli.js';

const COUNT_OF_CORRECT_ANSWERS_FOR_WIN = 3;

const isCorrectAnswer = (userAnswer, correctAnswer) => String(userAnswer) === String(correctAnswer);

const isWin = (correctAnswersCount) => correctAnswersCount === COUNT_OF_CORRECT_ANSWERS_FOR_WIN;

const runGame = (mission, makeQuiz) => {
  const userName = greeting();
  console.log(mission);

  let correctAnswersCount = 0;

  while (correctAnswersCount < COUNT_OF_CORRECT_ANSWERS_FOR_WIN) {
    const { question, correctAnswer } = makeQuiz();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isCorrectAnswer(userAnswer, correctAnswer)) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
  if (isWin(correctAnswersCount, userName)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default runGame;
