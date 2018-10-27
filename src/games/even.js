import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import { getRandomNum } from '../numbers';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0);

const playRound = () => {
  const getQuestion = getRandomNum();
  const getRightAnswer = isEven(getQuestion) ? 'yes' : 'no';
  
  return cons(getQuestion, getRightAnswer);
};
const playEven = () => playGame(task, playRound);

export default playEven;
