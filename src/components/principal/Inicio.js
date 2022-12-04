import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Inicio = (props) => {

    return (
        <Carousel>
            {
                props.listaJuegos.map((item) =>
                    <Carousel.Item interval={1000} key={item.id}>
                        <img
                            className='d-block w-100 h-25'
                            src={item.portada}
                            alt="portada del juego"
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>{item.nombreJuego}</h4>
                        </div>
                    </Carousel.Item>
                )
            }

        </Carousel>
    );
};

export default Inicio;
