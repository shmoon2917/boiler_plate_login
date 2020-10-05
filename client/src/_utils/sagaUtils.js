import { call, getContext, put } from "redux-saga/effects";

/* Saga Utils */
export const createAsyncSaga = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* saga(action) {
    try {
      const payload = yield call(promiseCreator, action.payload);

      yield put({ type: SUCCESS, payload });

      const history = yield getContext("history");
      history.push("/");
    } catch (e) {
      yield put({ type: ERROR, error: e });
    }
  };
};
