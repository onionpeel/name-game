import React from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Calculate from './Calculate';
import Scoreboard from './Scoreboard';
import Header from './Header';
import {incrementCount} from '../actions/countActions';

const Game = ({count, incrementCount}) => {
  const increaseCount = () => {
    incrementCount(count);
  };

  return (
    count === 0
      ?
        <Container>
          <Row>
            <Col xs={12} md={8} style={{marginTop: 20, marginLeft: 'auto', marginRight: 'auto'}}>
              <Card style={{backgroundColor: 'yellow'}}>
                <Card.Body>
                  <div>
                    <h4>Cool.  Amazing. The best.  My hero.</h4>
                    <h4>These are the words that come to your mind when you think about your uncle.</h4>
                    <h4>Even though you can't be as strong as him, he has made it possible for you to have fun.</h4>
                    <h4>So don't wait...</h4>
                  </div>
                  <div style={{textAlign: 'center'}}>
                    <Button onClick={increaseCount}>Click this because you know your uncle is awesome!</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      :
        <>
          <Header />
          <Scoreboard />
          <Calculate />
        </>
  );
};

Game.propTypes = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  incrementCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
