import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';

import todos from './todos';
import location from './location';
import history from './history';

const persistConfig = {
  key: 'root',
  storage
};

function configureStore(initialState = {}) {
  let rootReducer = combineReducers({ todos, location, history });
  rootReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  const persistor = persistStore(store);

  return { store, persistor };
}

const { store, persistor } = configureStore();

export { persistor };
export default store;
