export const moveSnakeBody = (snakeBody, snakeHeadPos, snakeTailPos) => {
  snakeBody.unshift(snakeHeadPos); //add the previous snake head pos to the body array
  snakeBody.pop(); //remove the last body cell
  return snakeBody;
}

export const newTailPosition = (snakeBody) => {
  const bodyLength = snakeBody.length;
  return snakeBody[bodyLength -1];
}
