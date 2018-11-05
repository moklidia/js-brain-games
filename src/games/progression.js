import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import getRandomNum from '../utils';

const task = 'What number is missing in this progression?';
const length = 10;

const playRound = () => {
  const firstNum = getRandomNum(1, 100);
  const step = getRandomNum(1, 10);
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(firstNum + i * step);
  }
  const hiddenElementPosition = getRandomNum(1, length);
  const rightAnswer = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = '..';

  const question = `${progression.join(' ')}`;

  return cons(question, rightAnswer);
};

export default () => playGame(task, playRound);
