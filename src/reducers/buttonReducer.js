import {DISPLAY_BUTTON} from '../actions/types';

const initialState = true;

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_BUTTON:
      return action.payload;
    default:
      return state;
  };
};
