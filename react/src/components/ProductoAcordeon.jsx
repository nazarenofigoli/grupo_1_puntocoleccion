
import React , {useState, useEffect} from "react";
import Accordion from "react-bootstrap/Accordion";

const ProductoAcordeon = () => {
  const [totalProductos, setTotalProductos] = useState([]);

  useEffect(() => {
    const getCantidad = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/product/all");
        const {allProducts} = await response.json();
        setTotalProductos(allProducts);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getCantidad();
  }, []);

  console.log (totalProductos)

  return (
    <>
    <h2>Productos:</h2>
    <Accordion>
      {totalProductos.map((producto, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{producto.nombre}</Accordion.Header>
          <Accordion.Body>
            {producto.descripcion}
            
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    </>
  );
};



export default ProductoAcordeon;
