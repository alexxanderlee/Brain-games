#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import {
  getRandomInt,
  getRandomOperation,
  isCorrectAnswer,
  isWin,
  calculate,
} from '../src/games/index.js';

const userName = greeting();
console.log('What is the result of the expression?');

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const arg1 = getRandomInt(0, 20);
  const arg2 = getRandomInt(0, 20);
  const oper = getRandomOperation();
  const correctAnswer = calculate(arg1, arg2, oper);

  console.log(`Question: ${arg1} ${oper} ${arg2}`);
  const answer = Number(readlineSync.question('Your answer: '));

  if (isCorrectAnswer(answer, correctAnswer)) {
    correctAnswersCount += 1;
  } else {
    break;
  }
}

isWin(correctAnswersCount, userName);
