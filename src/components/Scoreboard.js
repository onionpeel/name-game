import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ScoreCard from './ScoreCard';
import uuid from 'uuid/v4';

const Scoreboard = () => {
  const players = [
    {name: 'Sam', score: 0},
    {name: 'Becca', score: 0},
    {name: 'Abby', score: 0}
  ];

  return (
    <Container style={{marginTop: 20}}>
      <Row>
        {players.map(player => (
          <Col key={uuid()}>
            <ScoreCard name={player.name} score={player.score} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Scoreboard;
