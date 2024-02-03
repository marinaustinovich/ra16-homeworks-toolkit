import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import "./menu.css";

export const Menu = () => (
  <Navbar bg="light" expand="lg" className="mb-4 p-3">
    <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
      <i className="fas fa-film"></i>
      <span className="ms-2">My Movies App</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/" end>
          Main
        </Nav.Link>
        <Nav.Link as={NavLink} to="/favorites" end>
          Favorites
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
