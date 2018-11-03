import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import getRandomNum from '../utils';

const task = '';
const length = 10;

const playRound = () => {
  const num = getRandomNum();
  const step = Math.floor(Math.random() * 10);
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(num + i * step);
  }
  const randomIndex = Math.floor(Math.random() * 10);
  const rightAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = `What number is missing in this progression?
${progression.join(' ')}`;

  return cons(question, rightAnswer);
};

const playCalc = () => playGame(task, playRound);

export default playCalc;
