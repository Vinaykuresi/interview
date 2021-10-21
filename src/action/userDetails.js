
import actionTypes from "../actionTypes";
import { createAction } from 'redux-actions';
import axios from 'axios';
// export const increaseNumber = (number) => {
//     return (dispatch) => dispatch({ type: actionTypes.increase_number, number });
// };

export const getUserDetails = createAction(actionTypes.user_details);

// USER_DETAILS
export function UserDetails() {
    return dispatch => {
      axios.get(`http://jsonplaceholder.typicode.com/users`)
        .then((res) =>{ dispatch(getUserDetails(res.data))})
        .catch(err => dispatch(getUserDetails(err)))
    }
  }