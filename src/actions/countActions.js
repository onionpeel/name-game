import {COUNT} from './types';

export const incrementCount = (count) => (dispatch) => {
  count += 1;

  dispatch({
    type: COUNT,
    payload: count
  });
};
