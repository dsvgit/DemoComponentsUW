import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import nav from './modules/navigator/reducers/main';
import drawer from './modules/drawer/reducers/main';

export default createStore(
  combineReducers({
    nav,
    drawer
  }),
  applyMiddleware(thunk)
);
