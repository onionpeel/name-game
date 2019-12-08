import {combineReducers} from 'redux';
import count from './countReducer';
import isButtonDisplay from './buttonReducer';

export default combineReducers({count, isButtonDisplay});
