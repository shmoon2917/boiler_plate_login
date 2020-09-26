import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import rootReducer from "../_modules";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

export const store = createStore(rootReducer, applyMiddleware(Logger));
