import { combineReducers } from 'redux';
import {
  moveSnakeBody,
  newTailPosition,
  isValidMove
} from './../helpers/snakeMoveCalculation'
import {
  CREATE_NEW_FOOD,
  MOVE_SNAKE,
} from './../actions'

const initialGridPositions = {
  foodPosition: 0,
  headPosition: 118,
  tailPosition: 120,
  bodyPositions: [119],
}

const snakeReducer = (state = initialGridPositions, action) => {
  switch (action.type) {
    case CREATE_NEW_FOOD: {
      return { ...state, foodPosition: action.foodPosition };
    }
    case MOVE_SNAKE: {
      if (isValidMove(state.bodyPositions, state.headPosition, state.tailPosition, action.move)) {
        switch (action.move) {
          case 37: { // left
            const headPosition = state.headPosition - 1;
            const tailPosition = newTailPosition(state.bodyPositions);
            if (headPosition === state.foodPosition) {
              const bodyPositions = moveSnakeBody(state.bodyPositions.slice(), state.headPosition, state.tailPosition, true);
              return { ...state, headPosition, bodyPositions }
            } else {
              const bodyPositions = moveSnakeBody(state.bodyPositions.slice(), state.headPosition, state.tailPosition, false);
              return { ...state, headPosition, bodyPositions, tailPosition }
            }
          }
          case 38: { //up
            const headPosition = state.headPosition - 11;
            return { ...state, headPosition, bodyPositions, tailPosition }
          }
          case 39: { //right
            const headPosition = state.headPosition + 1;
            return { ...state, headPosition, bodyPositions, tailPosition }
          }
          case 40: { //down
            const headPosition = state.headPosition + 11;
            return { ...state, headPosition, bodyPositions, tailPosition }
          }
          default:
            // shouldn't reach here
            return state;
        }
      } else {
        alert('Invalid Move');
        return initialGridPositions;
      }
    }
    default:
      return state;
  }
}

export default combineReducers({
  food: foodReducer,
  snake: snakeReducer,
})
