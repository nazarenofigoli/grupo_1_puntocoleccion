import React, { useState, useEffect } from 'react';

const Categories = () => {
  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    const getCantidad = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product/allcategories');
        const data = await response.json();
        setTotalCategories(data.count);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getCantidad();
  }, []);

  return (
    <div className="panel">
      <h2>Total de Categorias</h2>
      <p>{totalCategories}</p>
    </div>
  );
};

export default Categories;