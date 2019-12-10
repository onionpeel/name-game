import {SCORE_CHANGE, UPDATE_SCORE} from '../actions/types';

const initialState = [
  {name: 'Sam', change: 0, score: 0},
  {name: 'Becca', change: 0, score: 0},
  {name: 'Abby', change: 0, score: 0}
];

export default (state = initialState, action) => {
  switch (action.type) {
    case SCORE_CHANGE:
      return [...state.filter(player => player.name !== action.payload.name), {name: action.payload.name, change: action.payload.change, score: action.payload.score}];
    case UPDATE_SCORE:
      return action.payload;
    default:
      return state;
  };
};
