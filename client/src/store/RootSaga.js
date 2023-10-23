import { fork, all } from "redux-saga/effects";
import { signUpWatcher } from "../redux/authorize/Authorize.saga";
function* rootSaga() {
  yield all([fork(signUpWatcher)]);
}

export { rootSaga };
