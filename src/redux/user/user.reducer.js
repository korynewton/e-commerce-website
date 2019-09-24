import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    // case '2':
    // case '3':
    default:
      return state;
  }
};

export default userReducer;
