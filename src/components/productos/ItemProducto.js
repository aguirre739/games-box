import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import moment from "moment";

const ItemProducto = (props) => {
  console.log(props.producto.nombreJuego)
  console.log(props.producto.precioJuego)
  console.log(props.producto.portada)
  console.log(props.producto.fechaLanzamiento)

  
  const eliminarProducto = (idProducto) => {
    console.log(idProducto);
    Swal.fire({
      title: "¿Está seguro de eliminar el producto?",
      text: "No puede recuperar el producto eliminado.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        //aqui tengo que eliminar el producto
        try {
          const consulta = await fetch(
            `http://localhost:4000/juegos/${idProducto}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          console.log(consulta);
          if (consulta.status === 200) {
            props.setRecargarProductos(true)
            Swal.fire(
              "El producto fue eliminado.",
              "Su producto fue eliminado correctamente.",
              "success"
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div>
        <h4>{props.producto.nombreJuego}</h4>
        <p>
          Precio:{" "}
          <span className="fw-bold px-2">${props.producto.precioJuego}</span>
        </p>
        <Image
          className="img-thumbnail w-50"
          src={props.producto.portada}
        ></Image>
        <p>Fecha de lanzamiento: {moment(props.producto.fechaLanzamiento).add(1,'d').format('L')}</p>
        <p>
          <span className="badge boton">{props.producto.categoria}</span>
        </p>
      </div>
      <div className="d-flex align-items-center">
        <Link
          className="mx-2 btn btn-success"
          to={`/productos/editar/${props.producto.id}`}
        >
          Editar
        </Link>
        <Button
          variant="danger"
          onClick={() => eliminarProducto(props.producto.id)}
        >
          Eliminar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
