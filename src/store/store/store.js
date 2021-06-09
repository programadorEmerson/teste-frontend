/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
