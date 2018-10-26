import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const playGame = (task, gameData) => {
  const startGame = console.log('Welcome to the Brain Games!');
  console.log(`${task}`);

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello ${userName}!`);

  const rounds = 3;

  for (let actualRound = 1; actualRound <= rounds; actualRound += 1) {
    const questionData = car(gameData);
    console.log(`Question: '${questionData}'`);
    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = String(cdr(gameData));

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

export default playGame;
