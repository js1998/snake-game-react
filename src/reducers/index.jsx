import { combineReducers } from 'redux';
import {
  CREATE_NEW_FOOD
} from './../actions'

const initialFoodState = {
  position: 0,
}


const foodReducer = (state = initialFoodState, action) => {
  switch (action.type) {
    case CREATE_NEW_FOOD: {
      const newPos = Math.floor(Math.random() * 121);
      return {
        ...state,
        position: newPos,
      }
    }
    default:
      return state;
  }
}

export default combineReducers({
  food: foodReducer
})
