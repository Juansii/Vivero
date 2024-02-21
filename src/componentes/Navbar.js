import '../hojas-de-estilo/navbar.css'

function Navbar() {
    return(
      <div className='central-container'> 
        <nav className='navigation'>
        <a href=' ' className='page-name'> Verde Balcon </a> 
          <div className='nav-links'> 
            <a href='/'> Inicio</a>
            <a href='/aboutus'> Nosotros</a>
            <a href='/questions'> Preguntas frecuentes</a>
            <a href='/location'> Ubicaciones</a>
            <a href='/store'> Tienda </a>
          </div>
        </nav>
      </div>
    )}


    export default Navbar;