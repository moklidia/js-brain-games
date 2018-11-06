import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import getRandomNum from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0);

const playRound = () => {
  const randomNum = getRandomNum(1, 100);
  const question = `${randomNum}`;
  const rightAnswer = isEven(randomNum) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};
export default () => playGame(task, playRound);
