import { combineReducers } from 'redux';
import { moveSnakeBody, newTailPosition } from './../helpers/snakeMoveCalculation'
import {
  CREATE_NEW_FOOD,
  MOVE_SNAKE,
} from './../actions'

const initialFoodState = {
  position: 0,
}

const initialSnakePosition = {
  headPosition: 118,
  tailPosition: 120,
  bodyPositions: [119],
}

const foodReducer = (state = initialFoodState, action) => {
  switch (action.type) {
    case CREATE_NEW_FOOD: {
      return {
        ...state,
        position: action.position,
      }
    }
    default:
      return state;
  }
}

const snakeReducer = (state = initialSnakePosition, action) => {
  switch (action.type) {
    case MOVE_SNAKE: {
      const tailPosition = newTailPosition(state.bodyPositions);
      const bodyPositions = moveSnakeBody(state.bodyPositions, state.headPosition, state.tailPosition);
      switch (action.move) {
        case 37: { // left
          if (state.headPosition % 11 !== 0 ){
            const headPosition = state.headPosition - 1;
            return {
              ...state,
              headPosition,
              bodyPositions,
              tailPosition,
            }
          } else {
            alert("Invalid Move"); // TODO: create better error handling
            return initialSnakePosition;
          }

        }
        case 38: { //up
          if (state.headPosition / 11 !== 0) {
            const headPosition = state.headPosition - 11;
            return {
              ...state,
              headPosition,
              bodyPositions,
              tailPosition,
            }
          } else {
            alert('Invalid Move');
            console.log(initialSnakePosition);
            return initialSnakePosition;
          }
        }
        case 39: { //right
          return {
            ...state,
            headPosition: state.headPosition + 1,
            bodyPositions,
            tailPosition,
          }
        }
        case 40: { //down
          return {
            ...state,
            headPosition: state.headPosition + 11,
            bodyPositions,
            tailPosition,
          }
        }
        default:
          return state;
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
