

import actionTypes from "../actionTypes";

import { combineReducers } from "redux";
// import userDetails from "./userDetails";



const initialState = {
  userDetails:[]
};

export const userDetails = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
  
      case actionTypes.user_details:
        return {
          ...state,
          userDetails:action.payload
        }
      default:
        return state;
    }
}

export const getUserDetails = state => state.userDetails;

// export default combineReducers({
//     userDetails
// });


// export default (state = initialState, action) => {
//     switch(action.type){
//         case(actionTypes.increase_number):
//             return {...state,count:action.number}
//         default:
//             return state
//     }
// }