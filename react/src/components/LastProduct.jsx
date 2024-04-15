import { useState, useEffect } from 'react';

const LastProduct= () => {
  const [ultimoProducto, setultimoproducto] = useState(0);

  useEffect(() => {
    const getCantidad = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product/lastProduct');
        const data = await response.json();
        setultimoproducto(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getCantidad();
  }, []);

  return (
    <div className="producto">
      <h2>{ultimoProducto.nombre}</h2>
      <p>{ultimoProducto.descripcion}</p>
      <p>Precio: ${ultimoProducto.precio}</p>
      <img scr= '' alt='' />
    </div>
  );
};

export default LastProduct;