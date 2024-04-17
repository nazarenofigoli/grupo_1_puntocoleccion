import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';

const UsuariosTotales= () => {
  const [totalUsuarios, setTotalUsarios] = useState(0);

  useEffect(() => {
    const getCantidad = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/user/all');
        const data = await response.json();
        setTotalUsarios(data.count);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getCantidad();
  }, []);

  return (
    <Card  bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body >
        <Card.Title style={{ fontSize: '30px',textAlign: 'center' }} >Total Usuarios</Card.Title>
         <Card.Text  style={{ fontSize: '50px', textAlign: 'center' }}>
          {totalUsuarios}
        </Card.Text>
        
        
      </Card.Body>
    </Card>
  );
};

export default UsuariosTotales;