export const CREATE_NEW_FOOD = 0;
export const MOVE_SNAKE = 1;

export function newFoodPos() {
  const newPos = Math.floor(Math.random() * 121);
  return {
    type: CREATE_NEW_FOOD,
    foodPosition: newPos,
  }
}

export function moveSnake(move) {
  return {
    type: MOVE_SNAKE,
    move,
  }
}
