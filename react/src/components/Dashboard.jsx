import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TotalProductos from './TotalProductos.jsx';
import UsuariosTotales from './UsuariosTotales.jsx';
import Categories from './Categories.jsx';
import LastProduct from './LastProduct.jsx';
import ProductoAcordeon from './ProductoAcordeon.jsx';
import Navbar from './NavBar.jsx';

const Dashboard = () => {
  return (
    <Container className="bg-body-tertiary align-self-center">
      <Navbar />
      <br/>
      <Row>
        <Col><TotalProductos/></Col>
        <Col><UsuariosTotales /></Col>
        <Col><Categories /></Col>
      </Row>
      <br></br>
      <Row>
        <Col><LastProduct /></Col>
        <Col><ProductoAcordeon /></Col>
      </Row>
      
    </Container>
  );
};

export default Dashboard;

