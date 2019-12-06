import React, {useState} from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';

const ScoreCard = ({name, score}) => {
  const [change, setChange] = useState('');

  const incrementByTwo = () => {
    setChange(+change + 2);
  };

  const decrementByThree = () => {
    setChange(+change - 3);
  };

  const decrementByFive = () => {
    setChange(+change - 5);
  };

  const clearChanges = () => {
    setChange('');
  };

  return (
    <Card>
      <Card.Header as="h5" style={{textAlign: 'center'}}>{name}</Card.Header>
      <Card.Body style={{backgroundColor: '#111617'}}>
        <Card.Title as="h1" style={{textAlign: 'center', color: '#ffffff'}}>{score}</Card.Title>
          <Card.Text style={{textAlign: 'center', color: '#ffffff'}}>
            Change this round: {change}
          </Card.Text>
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

export default ScoreCard;
