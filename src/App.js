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
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path ="/" element={<Inicio></Inicio>}>
        </Route>
        <Route exact path ="/productos" element={<ListarProductos></ListarProductos>}>
        </Route>
        <Route exact path ="/productos/nuevo" element={<AgregarProducto></AgregarProducto>}>
        </Route>
        <Route exact path ="/productos/editar" element={<EditarProducto></EditarProducto>}>
        </Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
