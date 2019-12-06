import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Calculate = () => {
  return (
    <Container style={{marginTop: 20}}>
      <Row style={{textAlign: 'center'}}>
        <Col>
          <Button>Submit the scores</Button>
        </Col>
      </Row>
    </Container>
  );
};

Calculate.propTypes = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Calculate);
