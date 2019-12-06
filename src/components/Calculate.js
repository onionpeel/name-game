import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

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

export default Calculate;
