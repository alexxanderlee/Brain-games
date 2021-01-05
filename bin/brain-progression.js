#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import {
  getRandomInt,
  getRandomProgression,
  isCorrectAnswer,
  isWin,
} from '../src/games/index.js';

const userName = greeting();
console.log('What number is missing in the progression?');

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const progression = getRandomProgression();
  const missingElementPosition = getRandomInt(0, 9);
  const correctAnswer = progression[missingElementPosition];
  progression[missingElementPosition] = '..';
  const progressionString = progression.join(' ');

  console.log(`Question: ${progressionString}`);
  const answer = Number(readlineSync.question('Your answer: '));

  if (isCorrectAnswer(answer, correctAnswer)) {
    correctAnswersCount += 1;
  } else {
    break;
  }
}

isWin(correctAnswersCount, userName);
