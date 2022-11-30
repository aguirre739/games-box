import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

const Header = () =>{
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="mb-3 navbar1">
        <Container>
            <Navbar.Brand className="neon flicker-slow my-2" href="#">Games Box</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink exact={true} to="/" className="nav-link">Inicio</NavLink>
                    <NavLink exact={true} to="/productos" className="nav-link">Tienda</NavLink>
                    <NavLink exact={true} to="/productos/nuevo" className="nav-link">Nuevo Juego</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  );
}

export default Header;