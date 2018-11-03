import { cons } from 'hexlet-pairs';
import playGame from '../game-flow';
import getRandomNum from '../utils';

const task = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let i = 2;

  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1; // вместо i++;
  }

  return true;
};


const playRound = () => {
  const randomNum = getRandomNum();
  const question = `Question: ${randomNum}`;
  const rightAnswer = isPrime(randomNum) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};
const playPrime = () => playGame(task, playRound);

export default playPrime;
