import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LastProduct= () => {
  const [ultimoProducto, setUltimoProducto] = useState({});

  const [imagen, setImagen] = useState ({}) 
  const [url, setUrl] =useState (null)  
useEffect(() => {
    const getCantidad = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product/lastProduct');
        const data = await response.json();
        setUltimoProducto(data);
        setImagen(`http://localhost:3000/img/productos/${data.Imageproducts[0].imagen}`)
        setUrl(`http://localhost:3000/products/detail/${data.id}`)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getCantidad();
  }, []);



  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '35rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{ultimoProducto.nombre}</Card.Title>
          <Card.Text>
           { ultimoProducto.descripcion}
          </Card.Text>
          <Button href = {url} target='_blank' variant="primary">Ver Detalle</Button>
        </Card.Body>
      </Card>

    
    </div>
  );
}


export default LastProduct;