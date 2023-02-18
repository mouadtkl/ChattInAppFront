import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import rootSaga from './rootSaga';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

declare const global: {
  window: Window;
};

const composeEnhancers =
  (global.window as Window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// config middlewares
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const middlewares = [sagaMiddleware, thunk, logger];

// create the store
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(...middlewares)),
);

// register sagas
sagaMiddleware.run(rootSaga);

export default store;
