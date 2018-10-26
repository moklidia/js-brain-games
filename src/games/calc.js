import readlineSync from 'readline-sync';
import { getRandomNum, getRandomOp } from '../numbers';


const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello ${userName}!`);

  const rounds = 3;

  for (let actualRound = 1; actualRound <= rounds; actualRound += 1) {
    const num1 = getRandomNum();

    const num2 = getRandomNum();

    const currentOp = getRandomOp();

    const question = console.log(`Question: ${num1}${currentOp}${num2}`);

    const userAnswer = readlineSync.question('Your answer:');

    let rightAnswer;
    switch (currentOp) {
      case '+': rightAnswer = String(num1 + num2); break;
      case '-': rightAnswer = String(num1 - num2); break;
      default: rightAnswer = String(num1 * num2); break;
    }

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

export default calc;
