import { createStore, applyMiddleware, combineReducers } from 'redux';
import AsyncRefree from './middlewares';

const initializeStore = (reducers, middlewares = []) => createStore(
  combineReducers(reducers),
  applyMiddleware(AsyncRefree, ...middlewares),
);

export default initializeStore;
