import {COUNT} from './types';

export const incrementCount = (count) => (dispatch) => {
  console.log("where is dispatch")
  // dispatch({})
  count += 1;

  dispatch({
    type: COUNT,
    payload: count
  });
};
