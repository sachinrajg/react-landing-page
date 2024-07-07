import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/style.css"

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className='Navbar'>
    <Container >
      <Navbar.Brand as={Link} to="/">Coffee Haven</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-1">
          <Nav.Link as={Link}  to="/" className='nav-1'>Home</Nav.Link>
          <Nav.Link as={Link} to="#Footer" className='nav-1'>About</Nav.Link>
          <Nav.Link as={Link} to="#Footer" className='nav-1'>Contact</Nav.Link>
          <Nav.Link as={Link} to="/menu" className='nav-1'>Menu</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
