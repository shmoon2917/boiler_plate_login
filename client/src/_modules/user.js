import { createAsyncSaga } from "../_utils/sagaUtils";
import { asyncState, createAsyncReducer } from "../_utils/reducerUtils";
import UserService from "../_services/user.service";
import { getContext, takeEvery, call, put } from "redux-saga/effects";

/* Action Types */
const LOGIN_REQUEST = "user/LOGIN_REQUEST";
const LOGIN_REQUEST_SUCCESS = "user/LOGIN_REQUEST_SUCCESS";
const LOGIN_REQUEST_ERROR = "user/LOGIN_REQUEST_ERROR";

const REGISTER_REQUEST = "user/REGISTER_REQUEST";
const REGISTER_REQUEST_SUCCESS = "user/REGISTER_REQUEST_SUCCESS";
const REGISTER_REQUEST_ERROR = "user/REGISTER_REQUEST_ERROR";

const AUTH_REQUEST = "user/AUTH_REQUEST";
const AUTH_REQUEST_SUCCESS = "user/AUTH_REQUEST_SUCCESS";
const AUTH_REQUEST_ERROR = "user/AUTH_REQUEST_ERROR";

/* Action Creator */
export const login = (body) => ({
  type: LOGIN_REQUEST,
  payload: body,
});

export const register = (body) => ({
  type: REGISTER_REQUEST,
  payload: body,
});

export const auth = (forWhom) => ({
  type: AUTH_REQUEST,
  meta: forWhom,
});

/* Saga */
const LoginSaga = createAsyncSaga(LOGIN_REQUEST, UserService.login);
const RegisterSaga = createAsyncSaga(REGISTER_REQUEST, UserService.register);
function* AuthSaga(action) {
  const forWhom = action.meta;
  try {
    const { isAuth, user } = yield call(UserService.auth);

    if (!isAuth) {
      console.log("인증 실패다");
      if (!["nonUser", "all"].includes(forWhom)) {
        // 유저가 없고, 페이지가 for user 라면
      }
    } else {
      console.log("인증 성공이다");
      if ((forWhom === "admin" && user.roles === 0) || forWhom === "nonUser") {
      }
    }

    yield put({ type: AUTH_REQUEST_SUCCESS, payload });
  } catch (e) {
    yield put({ type: AUTH_REQUEST_ERROR, error: e });
  }
}

export function* userSaga() {
  yield takeEvery(LOGIN_REQUEST, LoginSaga);
  yield takeEvery(REGISTER_REQUEST, RegisterSaga);
  yield takeEvery(AUTH_REQUEST, AuthSaga);
}

/* Initial State */
const initialState = {
  login: asyncState.initial(),
  register: asyncState.initial(),
  auth: asyncState.initial(),
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

    case AUTH_REQUEST:
    case AUTH_REQUEST_SUCCESS:
    case AUTH_REQUEST_ERROR:
      return createAsyncReducer(AUTH_REQUEST, "auth", true)(state, action);

    default:
      return state;
  }
};
