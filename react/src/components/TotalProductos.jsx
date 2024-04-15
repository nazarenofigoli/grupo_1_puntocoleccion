import { useState, useEffect } from 'react';

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
    <div className="panel">
      <h2>Total de Productos</h2>
      <p>{totalProductos}</p>
    </div>
  );
};

export default TotalProductos;
