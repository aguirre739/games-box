import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Inicio = (props) => {
    return (
        <div>
            <Carousel>
                {props.listaJuegos.map((item) => (
                    <Carousel.Item
                        interval={1000}
                        key={item.id}
                        className="slider-container"
                    >
                        <img
                            className="d-block"
                            src={item.portada}
                            alt="portada del juego"
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>{item.nombreJuego}</h4>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="my-4">
                <div className="jumbotron jumbotron-fluid fondo-form color-texto">
                    <Container className="py-4">
                        <h1 className="fs-1">Bienvenido a Games Box</h1>
                        <p className="lead lh-base">
                            Games Box es una web realizada como proyecto final del curso de
                            React Fullstack de Codo a Codo. Es un CRUD utilizando todo lo
                            solicitado en los requerimientos, para realizar el proceso de
                            alta, baja y modificacion de una web de juegos.
                        </p>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
