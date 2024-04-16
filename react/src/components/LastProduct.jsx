import { useState, useEffect } from 'react';

const LastProduct= () => {
  const [ultimoProducto, setUltimoProducto] = useState({});
const [imagen, setImagen] = useState ({}) 
  
useEffect(() => {
    const getCantidad = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product/lastProduct');
        const data = await response.json();
        setUltimoProducto(data);
        setImagen(`http://localhost:3000/img/productos/${data.Imageproducts[0].imagen}`)
        
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
      <img src={imagen} alt=''/>
    </div>
  );
};

export default LastProduct;