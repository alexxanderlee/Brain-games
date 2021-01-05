#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import { getRandomInt, isCorrectAnswer, isWin } from '../src/games/index.js';

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const number = getRandomInt(0, 30);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (isCorrectAnswer(answer, correctAnswer)) {
    correctAnswersCount += 1;
  } else {
    break;
  }
}

isWin(correctAnswersCount, userName);
