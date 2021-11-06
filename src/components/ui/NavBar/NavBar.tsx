import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" variant="light" className="me-4 mb-5 border rounded-3">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Find Degree of Separation
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
