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
