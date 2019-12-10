import React, {useState, useEffect} from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import ChangeValueAlert from './ChangeValueAlert';
import {setScoreChange} from '../actions/scoreChangeActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const ScoreCard = ({name, score, change, players, setScoreChange}) => {
  useEffect(() => {
    setLocalChange(change)
  }, [players]);

  const [localChange, setLocalChange] = useState(change);

  const incrementByTwo = () => {
    setScoreChange({
      name,
      change: 2,
      score
    });
    setLocalChange(+localChange + 2);
  };

  const decrementByThree = () => {
    setScoreChange({
      name,
      change: -3,
      score
    });
    setLocalChange(+localChange - 3);
  };

  const decrementByFive = () => {
    setScoreChange({
      name,
      change: -5,
      score
    });
    setLocalChange(+localChange - 5);
  };

  const clearChanges = () => {
    setScoreChange({
      name,
      change: 0,
      score
    });
    setLocalChange(null);
  };

  return (
    <Card>
      <Card.Header as="h5" style={{textAlign: 'center'}}>{name}</Card.Header>
      <Card.Body style={{backgroundColor: '#111617'}}>
        <Card.Title as="h1" style={{textAlign: 'center', color: '#ffffff'}}>{score}</Card.Title>
          <Card.Text style={{textAlign: 'center', color: '#ffffff'}}>
            Change this round: {localChange}
          </Card.Text>
        <ChangeValueAlert change={localChange} />
        <Container>
          <Row style={{textAlign: 'center'}}>
            <Col>
              <Button onClick={incrementByTwo} style={{backgroundColor: '#33bf2c', border: '#33bf2c'}}>+2</Button>
            </Col>
            <Col>
              <Button onClick={decrementByThree} style={{backgroundColor: '#e85f54', border: '#e85f54'}}>-3</Button>
            </Col>
            <Col>
              <Button onClick={decrementByFive} style={{backgroundColor: '#fa2b19', border: '#fa2b19'}}>-5</Button>
            </Col>
          </Row>
          <Row style={{textAlign: 'center'}}>
            <Col>
              <Button onClick={clearChanges} style={{marginTop: 20, backgroundColor: '#b6b9ba', border: '#b6b9ba'}}>Clear changes</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

ScoreCard.propTypes = {
  setScoreChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = {
  setScoreChange
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
