import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import ItemProducto from "./ItemProducto";


const ListarProductos = (props) => {
  return (
    <Container>
      <h1 className="display-4 text-center my-4 color-texto">
        Lista de productos
      </h1>
      <ListGroup>
        <ItemProducto></ItemProducto>
      </ListGroup>
    </Container>
  );
};

export default ListarProductos;
