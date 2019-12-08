import {DISPLAY_BUTTON} from './types';

export const setDisplayButton = (isButton) => dispatch => {
  let value = !isButton;

  dispatch({
    type: DISPLAY_BUTTON,
    payload: value
  });
};
