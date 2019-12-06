import {COUNT} from '../actions/types';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNT:
      return action.payload;
    default:
      return state;
  }
};
