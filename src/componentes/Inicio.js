import planta from '../imagenes/plantas-interior.jpeg'
import '../hojas-de-estilo/inicio.css'
import Buscador from './Buscador';


function Inicio() {
 
  return (

    <div className='main-container'>
      <div className="image-container"> 
        <img src={planta} alt='planta-interior' className='image-plant' /> 
      </div>
      <h2 className='stock'> Verde Balcón </h2>
      <Buscador /> 

    </div>
  )
};

export default Inicio;