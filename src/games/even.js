import playGame from '../game-flow';
import { getRandomNum } from '../numbers';


  const task = 'Answer "yes" if number even otherwise answer "no".';

  const getQuestion = getRandomNum();

  const isEven = num => (num % 2 === 0);

  const getRightAnswer = isEven(question) ? 'yes' : 'no';


export default () => playGame();
