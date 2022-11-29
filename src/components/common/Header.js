import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () =>{
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="mb-3 navbar1">
        <Container>
            <Navbar.Brand className="neon flicker-slow my-2" href="#home">Games Box</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#tienda">Tienda</Nav.Link>
                    <Nav.Link href="#nuevoJuego">Nuevo Juego</Nav.Link>
                    <Nav.Link href="#login">Iniciar Sesión</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  );
}

export default Header;