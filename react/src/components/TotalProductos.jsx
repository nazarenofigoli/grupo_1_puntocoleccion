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
    <div style={{backgroundColor:'#000', textAlign: 'center', borderTopLeftRadius: '20px', borderTopRightRadius: '20px',borderBottomLeftRadius: '20px',borderBottomRightRadius: '20px'}}className="panel">
      <h3 style = {{color: '#27AEA8'}} >Total de Productos</h3>
      <h1 style = {{color: '#27AEA8'}} >{totalProductos}</h1>
      
    </div>
  );
};

export default TotalProductos;

