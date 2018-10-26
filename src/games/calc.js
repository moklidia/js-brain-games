import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import { getRandomNum, getRandomOp } from '../numbers';

const task = 'What is the result of the expression?';

const currentOp = getRandomOp();
const num1 = getRandomNum();
const num2 = getRandomNum();

const getQuestion = `${num1}${currentOp}${num2}`;

let rightAnswer;
    switch (currentOp) {
      case '+': rightAnswer = num1 + num2; break;
      case '-': rightAnswer = num1 - num2; break;
      default: rightAnswer = num1 * num2; break;
    }

const getRightAnswer = rightAnswer;
	
const gameData = cons(getQuestion, getRightAnswer);

const playCalc = () => playGame(task, gameData);

export default playCalc;
