export const getRandomNum = () => Math.floor(Math.random() * 100);


export const getRandomOp = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random()*operators.length);
  return operators[randomIndex];
};
