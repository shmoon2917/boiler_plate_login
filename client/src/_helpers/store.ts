import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import rootReducer, { rootSaga } from "../_modules";
import createSagaMiddleware from "redux-saga";
import { history } from "./history";

const sagaMiddleware = createSagaMiddleware({
  context: {
    history,
  },
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, Logger)
);

sagaMiddleware.run(rootSaga);
