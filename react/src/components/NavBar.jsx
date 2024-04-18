import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="http://localhost:3000/">
            <img 
              src="./LogoP2.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link 
              href="http://localhost:3000/users/all" 
              style={{ fontSize: '1.2em', color: 'white' }}
              onMouseOver={(e) => e.target.style.color = 'green'}
              onMouseOut={(e) => e.target.style.color = 'white'}>
              Usuarios
            </Nav.Link>
            <br></br>
            <br></br>
            <Nav.Link 
              href="http://localhost:3000/products/dashboard" 
              style={{ fontSize: '1.2em', color: 'white' }}
              onMouseOver={(e) => e.target.style.color = 'green'}
              onMouseOut={(e) => e.target.style.color = 'white'}>
              Productos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavBar;
