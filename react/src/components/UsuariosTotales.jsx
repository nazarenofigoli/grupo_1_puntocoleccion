import { useState, useEffect } from 'react';

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
    <div style={{textAlign: 'center', backgroundColor:'#000', borderTopLeftRadius: '20px', borderTopRightRadius: '20px',borderBottomLeftRadius: '20px',borderBottomRightRadius: '20px'}}className="panel">
      <h3 style = {{color: '#27AEA8'}} >Total de Usuarios</h3>
      <h1 style = {{color: '#27AEA8'}} h1>{totalUsuarios}</h1>
    </div>
  );
};

export default UsuariosTotales;