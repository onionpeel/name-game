import {ANSWER} from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case ANSWER:
      return action.payload;
    default:
      return state;
  };
};
