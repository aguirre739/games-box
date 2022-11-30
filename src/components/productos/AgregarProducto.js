import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AgregarProducto = () => {
    return (
        <Container className='color-texto d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-center my-4'>Agregar Nuevo Juego</h1>
                <Form className='w-75 fondo-form shadow-lg p-3 mb-5 rounded'>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre del juego *</Form.Label>
                        <Form.Control type="text" placeholder="Ej. Isacc" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Precio *</Form.Label>
                        <Form.Control type="number" placeholder="Ej. $2600" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Portada del juego *</Form.Label>
                        <Form.Control type="text" placeholder="url/link de la imagen" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Fecha de lanzamiento *</Form.Label>
                        <Form.Control type="date" placeholder="fecha" />
                    </Form.Group>

                    <h3 className="text-center my-4">Categorias</h3>
                    <Form.Group className="my-3 text-center">
                        <div className="mb-3">
                            <Form.Check
                            type="radio"
                            inline
                            label="Acción"
                            value="accion"
                            name="categoria"
                            />
                            <Form.Check
                            type="radio"
                            inline
                            label="Aventura"
                            value="aventura"
                            name="categoria"
                            />
                            <Form.Check
                            type="radio"
                            inline
                            label="Rol"
                            value="rol"
                            name="categoria"
                            />
                            <Form.Check
                            type="radio"
                            inline
                            label="Simulación"
                            value="simulacion"
                            name="categoria"
                            />
                            <Form.Check
                            type="radio"
                            inline
                            label="Estrategia"
                            value="estrategia"
                            name="categoria"
                            />
                            <Form.Check
                            type="radio"
                            inline
                            label="Deportes"
                            value="deporte"
                            name="categoria"
                            />
                        </div>
                    </Form.Group>

                    <div className='d-grid gap-2'>
                        <Button className='boton' size="sm" block type="submit">
                            Agregar Juego
                        </Button>
                    </div>
                    
                </Form>
        </Container>
    );
};

export default AgregarProducto;