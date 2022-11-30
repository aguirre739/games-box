import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const AgregarProducto = () => {
  const [nombreJuego, setNombreJuego] = useState("");
  const [precioJuego, setPrecioJuego] = useState("");
  const [portada, setPortada] = useState("");
  const [fechaLanzamiento, setFechaLanzamiento] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombreJuego.trim() === "" ||
      precioJuego.trim() === "" ||
      portada.trim() === "" ||
      fechaLanzamiento.trim() === "" ||
      categoria === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <Container className="color-texto d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center my-4">Agregar Nuevo Juego</h1>
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
            onChange={(e) => setNombreJuego(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej. $2600"
            onChange={(e) => setPrecioJuego(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Portada del juego *</Form.Label>
          <Form.Control
            type="text"
            placeholder="url/link de la imagen"
            onChange={(e) => setPortada(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha de lanzamiento *</Form.Label>
          <Form.Control
            type="date"
            placeholder="fecha"
            onChange={(e) => setFechaLanzamiento(e.target.value)}
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
            />
            <Form.Check
              type="radio"
              inline
              label="Aventura"
              value="aventura"
              name="categoria"
              onChange={seleccionarCategoria}
            />
            <Form.Check
              type="radio"
              inline
              label="Rol"
              value="rol"
              name="categoria"
              onChange={seleccionarCategoria}
            />
            <Form.Check
              type="radio"
              inline
              label="Simulación"
              value="simulacion"
              name="categoria"
              onChange={seleccionarCategoria}
            />
            <Form.Check
              type="radio"
              inline
              label="Estrategia"
              value="estrategia"
              name="categoria"
              onChange={seleccionarCategoria}
            />
            <Form.Check
              type="radio"
              inline
              label="Deportes"
              value="deporte"
              name="categoria"
              onChange={seleccionarCategoria}
            />
          </div>
        </Form.Group>

        <div className="d-grid gap-2">
          <Button className="boton" size="sm" block type="submit">
            Agregar Juego
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
