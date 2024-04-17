import  { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

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
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body >
        <Card.Title style={{ fontSize: '30px',textAlign: 'center' }} >Total Categorias</Card.Title>
         <Card.Text  style={{ fontSize: '50px', textAlign: 'center' }}>
          {totalCategories}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Categories;