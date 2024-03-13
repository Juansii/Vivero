import { useState } from 'react';
import planta from '../imagenes/plantas-interior.jpeg';
import trabajador from '../imagenes/trabajador-vivero.jpeg';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      telephone: ''
    });
  };

  return (
    <div class='container'>
      <div class='row my-5 text-center justify-content-center'>
        <section class='col-12 py-5'>
          <div class="container">
            <img src={planta} alt="Descripción de la imagen" class="img-fluid" />
          </div>
        </section>


        <section class='col-12 py-5 mb-4'>
          <div class='row'>
            <div class='col-lg-6 d-flex align-items-center'>
              <div>
                <h2><i>Sobre Nosotros</i></h2>
                <p>
                  Fundamos Verde Balcón con un objetivo en mente: ofrecer productos de alta calidad, cuidadosamente cultivados y listos para instalarse en diferentes hogares.
                  Nuestra pasión por la naturaleza nos ha impulsado desde el principio y continúa impulsándonos a seguir adelante. Creemos que cada una de nuestras plantas es importante y nos esforzamos por hacer que tu experiencia de compra sea lo más gratificante posible.
                  Te esperamos para que puedas comprobar la calidad de nuestros productos en cualquiera de nuestras sucursales.
                </p>
              </div>
            </div>
            <div class='col-lg-6'>
              <img
                src={trabajador}
                alt='Verde Balcon worker'
                class='img-fluid'
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;
