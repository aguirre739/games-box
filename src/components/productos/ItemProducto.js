import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';


const ItemProducto = (props) => {
    return (
        <ListGroup.Item>
            <h4>{props.producto.nombreJuego}</h4>
            <p>Precio: <span className="fw-bold px-2">
                ${props.producto.precioJuego}</span></p>
            <Image className='img-thumbnail w-50' src={props.producto.portada}>
            </Image>
            <p>Fecha de lanzamiento: {props.producto.fechaLanzamiento}</p>
            <p><span className='badge boton'>{props.producto.categoria}</span></p>

            <Button variant="success">Editar</Button>
            <Button variant="danger">Eliminar</Button>
        </ListGroup.Item>
    );
};

export default ItemProducto;