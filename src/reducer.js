import { combineReducers } from 'redux';

const basic = (state = {}, { type, curry }) => state;

export default combineReducers({ basic });
