import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Welcome to the Constitution App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/games">Games</Link>
          <Link className="nav-link" to="/preamble">Preamble</Link>
          <Link className="nav-link" to="/fundamental-rights">Fundamental Rights</Link>
          <Link className="nav-link" to="/directive-principles">Directive Principles</Link>
          <Link className="nav-link" to="/fundamental-duties">Fundamental Duties</Link>
        </Nav>

        {/* Add the dropdown for language settings */}
        <Nav>
        <NavDropdown title="language" id="language-dropdown" align="end">
          <NavDropdown.Item >English</NavDropdown.Item>
          <NavDropdown.Item >Hindi</NavDropdown.Item>
        </NavDropdown>
        </Nav>

        {/* Add the account details logo */}
        <Nav>
          <Nav.Link href="#account" className="d-flex align-items-center">
            <img
              src="./images/account_logo.jpg" // Path to your account logo image
              alt="Account"
              style={{ width: '24px', height: '24px' }}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
