export const moveSnakeBody = (snakeBody, snakeHeadPos, snakeTailPos, hitFood) => {
  snakeBody.unshift(snakeHeadPos); //add the previous snake head pos to the body array
  if (!hitFood) {
    snakeBody.pop(); //remove the last body cell only if we didn't hit the food
  }
  return snakeBody;
}

export const newTailPosition = (snakeBody) => {
  const bodyLength = snakeBody.length;
  return snakeBody[bodyLength -1];
}

export const isValidMove = (snakeBody, snakeHeadPos, snakeTailPos, move) => {
  switch (move) {
    case 37: // left
      return snakeHeadPos % 11 !== 0 &&
        !snakeBody.includes(snakeHeadPos - 1) &&
        snakeTailPos !== snakeHeadPos - 1;
    case 38: //up
      return Math.floor(snakeHeadPos / 11) !== 0 &&
        !snakeBody.includes(snakeHeadPos - 11) &&
        snakeTailPos !== snakeHeadPos - 11;
      return true;
    case 39: //right
      return snakeHeadPos % 11 !== 10 &&
        !snakeBody.includes(snakeHeadPos + 1) &&
        snakeTailPos !== snakeHeadPos + 1;
    case 40:
      return Math.floor(snakeHeadPos / 11 ) !== 10 &&
        !snakeBody.includes(snakeHeadPos + 11) &&
        snakeTailPos !== snakeHeadPos + 11;
    default:
      // shouldn't be able to get here
      return false;
  }
}
