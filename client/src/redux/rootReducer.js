import { combineReducers } from "redux";

import userReducer from "./reducers/userReducer";
import companyReducer from "./reducers/companyReducer";

const rootReducer = combineReducers({
  userReducer,
  companyReducer
});

export default rootReducer;
