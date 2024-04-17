import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const TotalProductos = () => {
  const [totalProductos, setTotalProductos] = useState(0);

  useEffect(() => {
    const getCantidad = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product/all');
        const data = await response.json();
        setTotalProductos(data.count);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getCantidad();
  }, []);

  return (
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body >
        <Card.Title style={{ fontSize: '30px',textAlign: 'center' }} >Total Productos</Card.Title>
         <Card.Text  style={{ fontSize: '50px', textAlign: 'center' }}>
          {totalProductos}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default TotalProductos;

