import {combineReducers} from 'redux';
import count from './countReducer';
import isButtonDisplay from './buttonReducer';
import answer from './answerReducer';
import players from './scoreChangeReducer';

export default combineReducers({count, isButtonDisplay, answer, players});
