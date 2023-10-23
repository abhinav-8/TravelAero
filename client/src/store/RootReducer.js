import { combineReducers } from "redux";
import { authorizeReducer } from "../redux/authorize/Authorize.reducer";

const rootReducer = combineReducers({
  authorizeReducer,
});

export { rootReducer };
