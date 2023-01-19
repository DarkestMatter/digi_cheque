import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./slices/reducers";
import { rootSaga } from "./slices/rootSaga";

function configStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
}

export const store = configStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
