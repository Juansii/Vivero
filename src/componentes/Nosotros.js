import  '../hojas-de-estilo/nosotros.css'
import trabajador from '../imagenes/trabajador-vivero.jpeg'

function Nosotros() {
  return(
    <div className='container-nosotros'>
      <div className='container-info'> 
        <h2> <i>Sobre Nosotros </i></h2>
        <hr/>
        <p>
        Fundamos Verde Balcón con un objetivo en mente: ofrecer productos de alta calidad, cuidadosamente cultivados y listos para instalarse es diferentes hogares. Nuestra pasión por la naturaleza nos ha impulsado desde el principio y continúa impulsándonos a seguir adelante. Creemos que cada una de nuestras plantas son importantes y nos esforzamos por hacer que tu experiencia de compra sea lo más gratificante posible. Te esperamos para que puedas comprobar la calidad de nuestros productos en cualquiera de nuestras sucursales. 
        </p>
      </div>

      <div className='container-img'>
        <img 
        src={trabajador}
        alt='parte del equipo de Verde Balcón'
        />
      </div>
      

    </div>
  )
}

export default Nosotros; 