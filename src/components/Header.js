import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

const Header = () => (
    <Navbar style={{backgroundColor: '#ebeae6'}}>
      <Container>
        <Navbar.Brand href="#home">Let's play <i><b>My Uncle is Awesome</b></i></Navbar.Brand>
      </Container>
    </Navbar>
);

export default Header;
