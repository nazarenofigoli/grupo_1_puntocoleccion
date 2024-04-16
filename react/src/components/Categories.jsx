import  { useState, useEffect } from 'react';

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
    <div style={{backgroundColor:'#000', borderTopLeftRadius: '20px', textAlign: 'center', borderTopRightRadius: '20px',borderBottomLeftRadius: '20px',borderBottomRightRadius: '20px'}}className="panel">
      <h3 style = {{color: '#27AEA8'}}>Total de Categorias</h3>
      <h1 style = {{color: '#27AEA8'}}>{totalCategories}</h1>
    </div>
  );
};

export default Categories;