import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import { getRandomNum } from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0);

const playRound = () => {
  const question = getRandomNum();
  const rightAnswer = isEven(getQuestion) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};
const playEven = () => playGame(task, playRound);

export default playEven;
