import { createAsyncSaga } from "../_utils/sagaUtils";
import { asyncState, createAsyncReducer } from "../_utils/reducerUtils";
import UserService from "../_services/user.service";
import { getContext, takeEvery } from "redux-saga/effects";

/* Action Types */
const LOGIN_REQUEST = "user/LOGIN_REQUEST";
const LOGIN_REQUEST_SUCCESS = "user/LOGIN_REQUEST_SUCCESS";
const LOGIN_REQUEST_ERROR = "user/LOGIN_REQUEST_ERROR";

const REGISTER_REQUEST = "user/REGISTER_REQUEST";
const REGISTER_REQUEST_SUCCESS = "user/REGISTER_REQUEST_SUCCESS";
const REGISTER_REQUEST_ERROR = "user/REGISTER_REQUEST_ERROR";

/* Action Creator */
export const login = (body) => ({
  type: LOGIN_REQUEST,
  payload: body,
});

export const register = (body) => ({
  type: REGISTER_REQUEST,
  payload: body,
});

/* Saga */
const LoginSaga = createAsyncSaga(LOGIN_REQUEST, UserService.login);
const RegisterSaga = createAsyncSaga(REGISTER_REQUEST, UserService.register);

export function* userSaga() {
  yield takeEvery(LOGIN_REQUEST, LoginSaga);
  yield takeEvery(REGISTER_REQUEST, RegisterSaga);
}

/* Initial State */
const initialState = {
  login: asyncState.initial(),
  register: asyncState.initial(),
};

/* Reducer */
export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_REQUEST_SUCCESS:
    case LOGIN_REQUEST_ERROR:
      return createAsyncReducer(LOGIN_REQUEST, "login")(state, action);

    case REGISTER_REQUEST:
    case REGISTER_REQUEST_SUCCESS:
    case REGISTER_REQUEST_ERROR:
      return createAsyncReducer(REGISTER_REQUEST, "register")(state, action);

    default:
      return state;
  }
};
