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
    <div className="panel">
      <h2>Total de Usuarios</h2>
      <p>{totalUsuarios}</p>
    </div>
  );
};

export default UsuariosTotales;