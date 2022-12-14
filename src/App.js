import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Inicio from './components/principal/Inicio';
import ListarProductos from './components/productos/ListarProductos';
import AgregarProducto from './components/productos/AgregarProducto';
import EditarProducto from './components/productos/EditarProducto';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  const [listaJuegos, setListaJuegos] = useState([]);
  const [recargarProductos, setRecargarProductos] = useState(true);

  useEffect(() => {
    consultarApi();
    setRecargarProductos(false);
  }, [recargarProductos])

  const consultarApi = async () => {
    try {
      const consulta = await fetch("http://localhost:4000/juegos")
      const resultado = await consulta.json();
      setListaJuegos(resultado)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Inicio listaJuegos={listaJuegos}></Inicio>}>
        </Route>
        <Route path="/productos" element={<ListarProductos listaJuegos={listaJuegos} setRecargarProductos={setRecargarProductos}></ListarProductos>}>
        </Route>
        <Route path="/productos/nuevo" element={<AgregarProducto setRecargarProductos={setRecargarProductos}></AgregarProducto>}>
        </Route>
        <Route exact path="/productos/editar/:idJuego"
          element={<EditarProducto listaJuegos={listaJuegos} setRecargarProductos={setRecargarProductos}></EditarProducto>}>
        </Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
