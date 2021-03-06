import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import nav from './children/navigator/reducers/main';
import drawer from './children/drawer/reducers/main';

export default createStore(
  combineReducers({
    // nav,
    drawer
  }),
  applyMiddleware(thunk)
);
