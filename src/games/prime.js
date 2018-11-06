import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import getRandomNum from '../utils';

const task = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playRound = () => {
  const randomNum = getRandomNum(1, 50);
  const question = `${randomNum}`;
  const rightAnswer = isPrime(randomNum) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};
export default () => playGame(task, playRound);
