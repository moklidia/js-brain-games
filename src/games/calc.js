import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import { getRandomNum } from '../utils';

const task = 'What is the result of the expression?';

const getRandomOp = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};
const playRound = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const currentOp = getRandomOp();

  const question = `${num1}${currentOp}${num2}`;

  let rightAnswer;
  switch (currentOp) {
    case '+': rightAnswer = num1 + num2; break;
    case '-': rightAnswer = num1 - num2; break;
    default: rightAnswer = num1 * num2; break;
  }

  return cons(question, rightAnswer);
};

const playCalc = () => playGame(task, playRound);

export default playCalc;
