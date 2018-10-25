import readlineSync from 'readline-sync';
import getRandomNum from './numbers';

const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello ${userName}!`);

  const rounds = 3;

  for (let actualRound = 1; actualRound <= rounds; actualRound += 1) {
    const num = getRandomNum();
    console.log(`Question: ${num}`);

    const userAnswer = readlineSync.question('Your answer:');

    const rightAnswer = (num % 2 === 0) ? 'yes' : 'no';

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default even;
