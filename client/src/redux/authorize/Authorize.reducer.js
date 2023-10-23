import React from "react";
import { AUTHORIZE_ACTIONS } from "../../constants/ActionConstants";

const initialState = {
  userDetails: {},
};
const authorizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZE_ACTIONS.SIGNUP_SUCCESS: {
      return { ...state, userDetails: action.userDetails };
    }
    case AUTHORIZE_ACTIONS.SIGNUP_FAILURE: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export { authorizeReducer };
