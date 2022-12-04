import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-dark py-3 position'>
            <Container className='text-light'>
                <h4>Games Box</h4>
                <div className='linea'></div>
                <p className='text-center text-muted'>&copy; Pamela Aguirre. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.
                Todos los precios incluyen IVA (donde sea aplicable).</p>
                <div className='linea'></div>
                <div sm={12} md={4} className='d-flex justify-content-evenly'>
                    <Link to="/" className='text-light enlace'>Inicio</Link>
                    <p>|</p>
                    <Link to="/productos" className='text-light enlace'>Tienda</Link>
                    <p>|</p>
                    <Link to="/productos/nuevo" className='text-light enlace'>Nuevo Juego</Link>
                </div>
            </Container>
        </div>
    );
};

export default Footer;