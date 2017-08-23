import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware as applyMid, createStore } from 'redux';

import rootR from './reducer';

const predicate = () => true;
const collapsed = (getState, action) => action.type;
const log = createLogger({ collapsed, predicate });

export default state => applyMid(thunk, log)(createStore)(rootR, state);
