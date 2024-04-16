import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div class='d-flex align-items-center'>
    <Dashboard />
    </div>
    {/* Renderiza el Footer */}
  </React.StrictMode>
);
