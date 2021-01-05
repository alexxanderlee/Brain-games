export const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * 3);
  return operations[rand];
};

export const calculate = (a, b, oper) => {
  switch (oper) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;

    default:
      return null;
  }
};

export const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

export const getRandomProgression = () => {
  const progression = [];
  const initialTerm = getRandomInt(0, 30);
  const difference = getRandomInt(1, 10);

  for (let step = 1; step <= 10; step += 1) {
    progression.push(initialTerm + (step - 1) * difference);
  }
  return progression;
};

export const isCorrectAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const isWin = (correctAnswersCount, userName) => {
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
