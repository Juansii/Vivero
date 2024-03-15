import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div class="container">
        <Link to="/" class="navbar-brand">Verde Balcon</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 dropdown-menu-end">
            <li class="nav-item">
              <Link to="/" class="nav-link" aria-current="page">Inicio</Link>
            </li>
            <li class="nav-item">
              <Link to="/frequentlyasked" class="nav-link">Preguntas Frecuentes</Link>
            </li>
            <li class="nav-item">
              <Link to="/contacto" class="nav-link">Contacto</Link>
            </li>
            <li class="nav-item">
              <Link to="/tienda" class="nav-link">Tienda</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
