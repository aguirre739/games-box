import React, { useState, useRef } from 'react';
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import moment from "moment";

const EditarProducto = (props) => {
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  let {idJuego} = useParams();
  console.log(idJuego);
  const productoSeleccionado = props.listaJuegos.find(
    (juego) => juego.id === parseInt(idJuego)
  );
  console.log(productoSeleccionado);


  //aqui creo los useRef
  const nombreProductoRef = useRef("");
  const precioProductoRef = useRef("");
  const portadaProductoRef = useRef("");
  const fechaProductoRef = useRef("");

  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validar los datos
    let _categoria = (categoria === "") ? productoSeleccionado.categoria : categoria;
    console.log(_categoria);
    console.log(nombreProductoRef)
    console.log("nombreProducto",nombreProductoRef.current.value);
    console.log("precioPRod",precioProductoRef.current.defaultValue);

    if (nombreProductoRef.current.value.trim() === "" || precioProductoRef.current.value.trim() === "" || portadaProductoRef.current.value.trim() === "" || fechaProductoRef.current.value.trim() === "" || _categoria === "") {
      //mostrar cartel de error
      setError(true);
      return;
    }
    setError(false);
    //preparar el objeto con los datos
    const productoModificado = {
      nombreProducto: nombreProductoRef.current.defaultValue,
      precioProducto: precioProductoRef.current.defaultValue,
      portadaProducto: portadaProductoRef.current.defaultValue,
      fechaProducto: fechaProductoRef.current.defaultValue,
      categoria: _categoria
    }
    //enviar el objeto
    try {
      const consulta = await fetch(`http://localhost:4000/juegos/${productoSeleccionado.id}`,
        {
          method: "PUT", //se usa para editar
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(productoModificado)
        });
      console.log(consulta);
      console.log(productoModificado)
      if (consulta.status === 200) {
        //se modificaron correctamente los datos
        props.setRecargarProductos(true);
        Swal.fire(
          'Producto Modificado',
          'El producto se Modificó correctamente',
          'success'
        )
      }
    } catch (msjerror) {
      console.log(msjerror);
      //mensaje para el usuario
    }
  }

  return (
    <Container className="color-texto d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center my-4">Editar Juego</h1>
      <Form
        className="w-75 fondo-form shadow-lg p-3 mb-5 rounded"
        onSubmit={handleSubmit}
      >
        {error ? (
          <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        ) : null}

        <Form.Group className="mb-3">
          <Form.Label>Nombre del juego *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. Isacc"
            ref={nombreProductoRef}

            defaultValue={productoSeleccionado.nombreJuego}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej. $2600"
            ref={precioProductoRef}
            defaultValue={productoSeleccionado.precioJuego}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Portada del juego *</Form.Label>
          <Form.Control
            type="text"
            placeholder="url/link de la imagen"
            ref={portadaProductoRef}
            defaultValue={productoSeleccionado.portada}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha de lanzamiento *</Form.Label>
          <Form.Control
            type="text"
            placeholder="fecha"
            ref={fechaProductoRef}
            defaultValue={moment(productoSeleccionado.fechaLanzamiento).add(1,'d').format('L')}
          />
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
              onChange={seleccionarCategoria}
              defaultChecked={productoSeleccionado.categoria === "accion"}
            />
            <Form.Check
              type="radio"
              inline
              label="Aventura"
              value="aventura"
              name="categoria"
              onChange={seleccionarCategoria}
              defaultChecked={productoSeleccionado.categoria === "aventura"}
            />
            <Form.Check
              type="radio"
              inline
              label="Rol"
              value="rol"
              name="categoria"
              onChange={seleccionarCategoria}
              defaultChecked={productoSeleccionado.categoria === "rol"}
            />
            <Form.Check
              type="radio"
              inline
              label="Simulación"
              value="simulacion"
              name="categoria"
              onChange={seleccionarCategoria}
              defaultChecked={productoSeleccionado.categoria === "simulacion"}
            />
            <Form.Check
              type="radio"
              inline
              label="Estrategia"
              value="estrategia"
              name="categoria"
              onChange={seleccionarCategoria}
              defaultChecked={productoSeleccionado.categoria === "estrategia"}
            />
            <Form.Check
              type="radio"
              inline
              label="Deportes"
              value="deporte"
              name="categoria"
              onChange={seleccionarCategoria}
              defaultChecked={productoSeleccionado.categoria === "deporte"}
            />
          </div>
        </Form.Group>

        <div className="d-grid gap-2">
          <Button className="boton" size="sm" block type="submit">
            Modificar Juego
          </Button>
        </div>
      </Form>
    </Container>
  );

};

export default EditarProducto;