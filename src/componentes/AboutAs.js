import trabajador from '../imagenes/trabajador-vivero.jpeg';

function Nosotros() {
  return (
    <div className='container-fluid' id='nosotros'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='container-info'> 
            <h2><i>Sobre Nosotros</i></h2>
            <hr />
            <p>
              Fundamos Verde Balcón con un objetivo en mente: ofrecer productos de alta calidad, cuidadosamente cultivados y listos para instalarse en diferentes hogares. Nuestra pasión por la naturaleza nos ha impulsado desde el principio y continúa impulsándonos a seguir adelante. Creemos que cada una de nuestras plantas es importante y nos esforzamos por hacer que tu experiencia de compra sea lo más gratificante posible. Te esperamos para que puedas comprobar la calidad de nuestros productos en cualquiera de nuestras sucursales.
            </p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='container-img'>
            <img 
              src={trabajador}
              alt='parte del equipo de Verde Balcón'
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
