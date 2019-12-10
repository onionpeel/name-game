import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {submitUpdatedScore} from '../actions/scoreChangeActions';
import ShowButton from './ShowButton';
import {setAnswerString} from '../actions/buttonActions';
import {createGameString} from '../array';

const Result = ({answer, players, submitUpdatedScore, setAnswerString}) => {
  const [showAnswer, setShowAnswer] = useState(true);

  const handleOnClick = () => {
    submitUpdatedScore(players);
    setAnswerString(createGameString());
    setShowAnswer(false);
  };

  return (
    showAnswer
      ?
      <>
        <p>{answer}</p>
        <Button onClick={handleOnClick}>Click to submit the changes and go to next round</Button>
      </>
      :
      <ShowButton />
  );
};

Result.propTypes = {
  answer: PropTypes.string.isRequired,
  submitUpdatedScore: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  answer: state.answer,
  players: state.players
});

const mapDispatchToProps = {
  submitUpdatedScore,
  setAnswerString
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
