import  {useState, useEffect} from "react";
import Accordion from "react-bootstrap/Accordion";

const ProductoAcordeon = () => {
  const [totalUsuarios, setTotalUsuarios] = useState([]);

  useEffect(() => {
    const getCantidad = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/user/all");
        const {users} = await response.json();
        setTotalUsuarios(users);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getCantidad();
  }, []);

  return (
    <>
    <Accordion>
    <h2>Usuarios:</h2>
      {totalUsuarios.map((user, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{user.nombre} {user.apellido}</Accordion.Header>
          <Accordion.Body>
            <p>Email: {user.email}</p>
            <p>Rol: {user.rol}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    </>
  );
};



export default ProductoAcordeon;
