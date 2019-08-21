import { combineReducers } from 'redux';

const initialFoodState = {
  foodPos: {
    foodPosX: 0,
    foodPosY: 0,
  },
}


const foodReducer = (state = initialFoodState, actions) => {
  return state
}

export default combineReducers({
  food: foodReducer
})
