import  { INCREMENT_COUNTER } from "../actions/increment";

const initialState = {
  counter: 0
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: action.payload
      }
    
    default:
      return state;
  }
}