import { userConstants as user } from "./constants";
import { asyncState, createAsyncReducer } from "../../_utils/reducerUtils";

const initialState = {
  login: asyncState.initial(),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case user.LOGIN_REQUEST:
    case user.LOGIN_REQUEST_SUCCESS:
    case user.LOGIN_REQUEST_ERROR:
      return createAsyncReducer(user.LOGIN_REQUEST, "login")(state, action);
    default:
      return state;
  }
};

export default userReducer;
