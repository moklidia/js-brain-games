import readlinesync from 'readline-sync';

const playGame = () => {

  const startGame = (task) => {
    console.log('Welcome to the Brain Games!');
    console.log(`${task}`);
  }

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello ${userName}!`);

  const rounds = 3;

  for (let actualRound = 1; actualRound <= rounds; actualRound += 1) {
    const questionData = getQuestion();
    const question = console.log(`Question: '${questionData}');
    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = getrightAnswer();

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
