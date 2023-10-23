import { AUTHORIZE_ACTIONS } from "../../constants/ActionConstants";

const signup = (userDetails) => ({
  type: AUTHORIZE_ACTIONS.SIGNUP,
  userDetails,
});
export { signup };
