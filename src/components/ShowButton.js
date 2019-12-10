import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {incrementCount} from '../actions/countActions';
import {createGameString} from '../array';
import {setDisplayButton, setAnswerString} from '../actions/buttonActions';
import CountDown from './CountDown';
import uuid from 'uuid/v4';

const ShowButton = ({incrementCount, count, isButtonDisplay, setDisplayButton, setAnswerString, players}) => {
  const [winner, setWinner] = useState('');
  const [winners, setWinners] = useState(null);

  useEffect(() => {
    let winningPlayer = players.filter(player => player.score === 15);
    if (winningPlayer.length === 1) {
      setWinner(winningPlayer[0].name);
    } else if (winningPlayer.length > 1) {
        setWinners(winningPlayer);
    };
  }, [players]);

  const increaseCount = () => {
    incrementCount(count);
    setAnswerString(createGameString());
    setDisplayButton(isButtonDisplay);
  };

  return (
    <>
      {
        winner
        ?
        <h1>{winner} is the winner!</h1>
        :
        winners
        ?
        <ul>
          {
            winners.map(winner => (
              <li style={{listStyleType: "none"}} key={uuid()} >
                {winner.name} is a winner!
              </li>
            ))
          }
        </ul>
        :
        isButtonDisplay
          ?
        <Button onClick={increaseCount}>Start the game!</Button>
          :
        <CountDown />
      }
    < />
  );
};

ShowButton.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  setDisplayButton: PropTypes.func.isRequired,
  isButtonDisplay: PropTypes.bool.isRequired,
  setAnswerString: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  count: state.count,
  isButtonDisplay: state.isButtonDisplay,
  players: state.players
});

const mapDispatchToProps = {
  incrementCount,
  setDisplayButton,
  setAnswerString
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowButton);
