import { configureStore, getDefaultMiddleware, Action, EnhancedStore } from '@reduxjs/toolkit';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { ThunkAction } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';
import createRootReducer from './reducers/rootReducer';
import { isEmpty } from 'lodash';

export const history = createHashHistory();

const rootReducer = createRootReducer(history);

export type RootState = ReturnType<typeof rootReducer>;

const router = routerMiddleware(history);
const middleware = [...getDefaultMiddleware({ serializableCheck: false }), router];
const excludeLoggerEnvs = ['test', 'production'];
const shouldIncludeLogger = !excludeLoggerEnvs.includes(
  process.env.NODE_ENV || ''
);
if (shouldIncludeLogger) {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });
  middleware.push(logger);
}
const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
middleware.push(sagaMiddleware);

export let store: EnhancedStore;

export const configuredStore = (initialState?: RootState) => {
  if (!isEmpty(store)) {
    return store;
  }
  // Create Store
  store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState: initialState,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export type Store = ReturnType<typeof configuredStore>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;