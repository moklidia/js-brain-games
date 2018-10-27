import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import { getRandomNum } from '../numbers';

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
  const getQuestion = `${num1} ${num2}`;
  const getRightAnswer = getGCD(num1, num2);
  return cons(getQuestion, getRightAnswer);
};

const playGcd = () => playGame(task, playRound);

export default playGcd;
