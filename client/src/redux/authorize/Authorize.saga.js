import { all, put, call, takeLatest } from "redux-saga/effects";
import { AUTHORIZE_ACTIONS } from "../../constants/ActionConstants";

const signUpService = async (userDetails) => {
  console.log(userDetails);
  let s = new URLSearchParams(Object.entries(userDetails)).toString();
  console.log(s);
  const response = await fetch(
    "http://localhost:3001/authservice/api/v1/signup",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: s,
    }
  );
  const json = await response.json();
  return { ok: response.ok, payload: json };
};

function* signUp({ userDetails }) {
  try {
    const response = yield call(signUpService, userDetails);

    console.log(response);
    yield put({ type: AUTHORIZE_ACTIONS.SIGNUP_SUCCESS, userDetails });
  } catch (err) {
    yield put({ type: AUTHORIZE_ACTIONS.SIGNUP_FAILURE });
  }
}

function* signUpWatcher() {
  yield all([takeLatest(AUTHORIZE_ACTIONS.SIGNUP, signUp)]);
}

export { signUpWatcher };
