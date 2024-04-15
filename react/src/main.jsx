import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'; // Importa el componente Header
import TotalProductos from './components/TotalProductos.jsx';
import UsuariosTotales from './components/UsuariosTotales.jsx';
import Categories from './components/Categories.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Renderiza el Header */}
    <Header />
    {/* Renderiza los otros componentes */}
    <TotalProductos />
    <UsuariosTotales />
    <Categories />
    {/* Renderiza el Footer */}
  </React.StrictMode>,
);