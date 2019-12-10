import {SCORE_CHANGE, UPDATE_SCORE} from './types';

export const setScoreChange = change => dispatch => {
  dispatch({
    type: SCORE_CHANGE,
    payload: change
  });
};

export const submitUpdatedScore = players => dispatch => {
  let newPlayers = players.map(player => ({name: player.name, change: 0, score: player.score + player.change}));
  dispatch({
    type: UPDATE_SCORE,
    payload: newPlayers
  });
};
