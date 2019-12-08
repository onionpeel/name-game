import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {incrementCount} from '../actions/countActions';
import {createGameString} from '../array';
import {setDisplayButton} from '../actions/buttonActions';
import CountDown from './CountDown';

const ShowButton = ({incrementCount, count, isButtonDisplay, setDisplayButton}) => {
  const [answerString, setAnswerString] = useState(null);
  const [isDisplay, setIsDisplay] = useState(true);

  const increaseCount = () => {
    incrementCount(count);
    setAnswerString(createGameString());
    setDisplayButton(isButtonDisplay);
  };

  return (
    isButtonDisplay
      ?
    <Button onClick={increaseCount}>Hey, click me!</Button>
      :
    <CountDown />
  );
};

ShowButton.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  setDisplayButton: PropTypes.func.isRequired,
  isButtonDisplay: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  count: state.count,
  isButtonDisplay: state.isButtonDisplay
});

const mapDispatchToProps = {
  incrementCount,
  setDisplayButton
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowButton);
