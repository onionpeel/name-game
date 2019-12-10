import {DISPLAY_BUTTON, ANSWER} from './types';

export const setDisplayButton = (isButton) => dispatch => {
  let value = !isButton;

  dispatch({
    type: DISPLAY_BUTTON,
    payload: value
  });
};

export const setAnswerString = string => dispatch => {
  dispatch({
    type: ANSWER,
    payload: string
  });
};
