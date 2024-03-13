import { Link } from 'react-router-dom';
import '../hojas-de-estilo/navbar.css';

function Navbar() {
  return (
    <div className='central-container'> 
      <nav className='navigation'>
        <Link to='/' className='page-name'> Verde Balcón </Link> 
        <div className='nav-links'> 
          {/* <Link to='/'> Inicio </Link>
          <Link to='/nosotros'> Nosotros </Link>
          <Link to='/preguntas-frecuentes'> Preguntas frecuentes </Link>
          <Link to='/form'> Contacto </Link>
          <Link to='/tienda'> Tienda </Link> */}
          <ul>
            <li><a href="#nostros">Nosotros</a></li>
            <li><a href="#seccion2">Sección 2</a></li>
            <li><a href="#seccion3">Sección 3</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;



