import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ScoreCard from './ScoreCard';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Scoreboard = ({players}) => {
  let samPlayer = players.find(player => player.name === 'Sam');
  let samScore = samPlayer.score;
  let samChange = samPlayer.change;

  let beccaPlayer = players.find(player => player.name === 'Becca');
  let beccaScore = beccaPlayer.score;
  let beccaChange = beccaPlayer.change;

  let abbyPlayer = players.find(player => player.name === 'Abby');
  let abbyScore = abbyPlayer.score;
  let abbyChange = abbyPlayer.change;

  return (
    <Container>
      <Row>
        <Col xs={12} lg={4} style={{marginTop: 20}}>
          <ScoreCard name={'Sam'} score={samScore} change={samChange} />
        </Col>
        <Col xs={12} lg={4} style={{marginTop: 20}}>
          <ScoreCard name={'Becca'} score={beccaScore} change={beccaChange} />
        </Col>
        <Col xs={12} lg={4} style={{marginTop: 20}}>
          <ScoreCard name={'Abby'} score={abbyScore} change={abbyChange} />
        </Col>
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
