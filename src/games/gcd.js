import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import getRandomNum from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGCD(b, a % b);
};

const playRound = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const rightAnswer = getGCD(num1, num2);
  return cons(question, rightAnswer);
};

const playGcd = () => playGame(task, playRound);

export default playGcd;
