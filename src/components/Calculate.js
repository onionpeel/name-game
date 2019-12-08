import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import CountDown from './CountDown';
import ShowButton from './ShowButton';

const Calculate = () => {

  return (
    <Container style={{marginTop: 20}}>
      <Row style={{textAlign: 'center'}}>
        <Col>
          <ShowButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Calculate;
