#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import {
  getRandomInt,
  isPrime,
  isCorrectAnswer,
  isWin,
} from '../src/games/index.js';

const userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const number = getRandomInt(0, 30);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (isCorrectAnswer(answer, correctAnswer)) {
    correctAnswersCount += 1;
  } else {
    break;
  }
}

isWin(correctAnswersCount, userName);
