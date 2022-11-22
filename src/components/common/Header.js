import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () =>{
  return (
    <div>
        {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
        <Container>
            <Navbar.Brand href="#home">Games Box</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Games Box
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#tienda">Tienda</Nav.Link>
                  <Nav.Link href="#acerca">Acerca de Nosotros</Nav.Link>
                  <Nav.Link href="#soporte">Soporte</Nav.Link>
                  <Nav.Link href="#login">Iniciar Sesion</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
    ))}
    </div>
  );
}

export default Header;