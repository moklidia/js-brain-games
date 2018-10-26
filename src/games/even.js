import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import { getRandomNum } from '../numbers';

const task = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = getRandomNum();

const isEven = num => (num % 2 === 0);

const getRightAnswer = isEven(getQuestion) ? 'yes' : 'no';

const gameData = cons(getQuestion, getRightAnswer);

const playEven = () => playGame(task, gameData);

export default playEven;
