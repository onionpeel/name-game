winners
?
{winners}
:
isButtonDisplay
  ?
<Button onClick={increaseCount}>Start the game!</Button>
  :
<CountDown />


import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ScoreCard from './ScoreCard';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Scoreboard = ({players}) => {
  let samPlayer = players.find(player => player.name === 'Sam');
  let samName = samPlayer.name;
  let samScore = samPlayer.score;

  let beccaPlayer = players.find(player => player.name === 'Becca');
  let beccaName = beccaPlayer.name;
  let beccaScore = beccaPlayer.score;

  let abbyPlayer = players.find(player => player.name === 'Abby');
  let abbyName = abbyPlayer.name;
  let abbyScore = abbyPlayer.score;

  const playerList = [
    {name: 'Sam', score: samScore},
    {name: 'Becca', score: beccaScore},
    {name: 'Abby', score: abbyScore}
  ];

  return (
    <Container>
      <Row>
        {players.map(player => (
          <Col xs={12} lg={4} style={{marginTop: 20}} key={uuid()}>
            <ScoreCard name={playerList.name} score={playerList.score} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Scoreboard.propTypes = {
  players: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  players: state.players
});

export default connect(mapStateToProps)(Scoreboard);




useEffect(() => {
  const timer = setInterval(() => {
    if (count <= 1) {
      clearInterval(timer);
    };
    count--;
    setCount(count);
  }, 1000);


}, [count]);


import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {incrementCount} from '../actions/countActions';

const Calculate = ({count, incrementCount}) => {
  const increaseCount = () => {
    incrementCount(count);
  };

  return (
    <Container style={{marginTop: 20}}>
      <Row style={{textAlign: 'center'}}>
        <Col>
          <Button onClick={increaseCount}>Submit the scores</Button>
        </Col>
      </Row>
    </Container>
  );
};

Calculate.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  incrementCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculate);
