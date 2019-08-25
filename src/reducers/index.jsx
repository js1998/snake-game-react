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

const gridReducer = (state = initialGridPositions, action) => {
  switch (action.type) {
    case CREATE_NEW_FOOD:
      return { ...state, foodPosition: action.foodPosition };
    case MOVE_SNAKE:
      let headPosition = state.headPosition;
      switch (action.move) {
        case 37:
          headPosition = state.headPosition - 1;
          break;
        case 38:
          headPosition = state.headPosition - 11;
          break;
        case 39:
          headPosition = state.headPosition + 1;
          break;
        case 40:
          headPosition = state.headPosition + 11;
          break;
        default:
          // should not even reach here
          headPosition = 0;
      }
      const hitFood = headPosition === state.foodPosition;
      const bodyPositions = moveSnakeBody(state.bodyPositions.slice(), state.headPosition, state.tailPosition, hitFood);
      const newTailPosition = newTailPosition(state.bodyPositions);
      //TODO: pass in the tail position to isValidMove to fix tail bug
      if(isValidMove(state.bodyPositions, state.headPosition, state.tailPosition, action.move, hitFood)){
        if (hitFood) {
          const newPos = Math.floor(Math.random() * 121);
          return { ...state, headPosition, bodyPositions, foodPosition: newPos };
        } else {
          return { ...state, headPosition, bodyPositions, tailPosition: newTailPosition };
        }
      } else {
        alert("You Lost :c");
        return { ...state };
      }
    default:
      return state;
  }
}

export default combineReducers({
  grid: gridReducer,
})
