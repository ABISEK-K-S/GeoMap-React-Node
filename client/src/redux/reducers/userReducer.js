import { USER } from "../types/userType";

const INITIAL_STATE = {
  UserDetails: {},
  companyDetails: {}
};

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER.UPDATE_USER_DATA:
      return {
        ...state,
        UserDetails: action.data
      };

    default:
      return state;
  }
};

export default storeReducer;
