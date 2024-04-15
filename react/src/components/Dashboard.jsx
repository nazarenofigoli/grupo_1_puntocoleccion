import TotalProductos from './TotalProductos.jsx'
import UsuariosTotales from './UsuariosTotales.jsx'
import Categories from './Categories.jsx' 
import '../../../public/stylesheets/header.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="section section1">
        <TotalProductos/>
      </div>
      <div className="section section2">
   <UsuariosTotales/>
      </div>
      <div className="section section3">
<Categories/>
      </div>
    </div>
  );
};

export default Dashboard;
