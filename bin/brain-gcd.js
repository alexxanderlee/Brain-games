#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import {
  getRandomInt,
  getGCD,
  isCorrectAnswer,
  isWin,
} from '../src/games/index.js';

const userName = greeting();
console.log('Find the greatest common divisor of given numbers.');

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const correctAnswer = getGCD(num1, num2);

  console.log(`Question ${num1} ${num2}`);
  const answer = Number(readlineSync.question('Your answer: '));

  if (isCorrectAnswer(answer, correctAnswer)) {
    correctAnswersCount += 1;
  } else {
    break;
  }
}

isWin(correctAnswersCount, userName);
