import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk';

import todos from './todos';

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({ todos });

  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
