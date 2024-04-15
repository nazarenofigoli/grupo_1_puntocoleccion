import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TotalProductos from './components/TotalProductos.jsx'
import UsuariosTotales from './components/UsuariosTotales.jsx'
import Categories from './components/Categories.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TotalProductos />
   <UsuariosTotales />
   <Categories />
   </React.StrictMode>,
)
