import { useState } from 'react';
import trabajador from '../imagenes/trabajador-vivero.jpeg';
import planta from '../imagenes/planta-i1.jpeg';
import planta2 from '../imagenes/planta-i2.jpeg';
import planta3 from '../imagenes/planta-i3.jpeg'
import '../hojas-de-estilo/home.css'

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
          <div class='carousel slide' id='slide-img' data-bs-ride='carousel'>
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <img src={planta} class='d-block w-100 h-100' alt='planta n1' />
              </div>
              <div class='carousel-item'>
                <img src={planta2} class='d-block w-100 h-100' alt='planta n2' />
              </div>
              <div class='carousel-item'>
                <img src={planta3} class='d-block w-100 h-100' alt='planta n3' />
              </div>
            </div>
            <a href='#slide-img'
              class='carousel-control-prev'
              role='button'
              data-bs-slide='prev'
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a href='#slide-img'
              class='carousel-control-next'
              role='button'
              data-bs-slide='next'
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>

          </div>
        </section>




        <section class='col-12 py-5 mb-4'>
          <div class='row'>
            <div class='col-lg-6 d-flex align-items-center'>
              <div>
                <h2><i>Sobre Nosotros</i></h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis fringilla sapien, nec feugiat dolor commodo ut. In hac habitasse platea dictumst. Vivamus aliquet velit ut lacus suscipit, ut sollicitudin velit suscipit. Sed ultricies orci sed risus accumsan, a laoreet ipsum molestie. Integer fringilla velit in est tempor, eget dapibus ipsum vulputate. Sed non malesuada lorem. Sed vestibulum metus eget mi dictum, a vehicula dui volutpat. Integer varius nisi nec eros suscipit ultricies. Integer scelerisque leo id nulla feugiat, vitae fringilla purus consectetur. Quisque nec nunc sed sapien varius condimentum. 
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

        <section class='custom-bg-color text-secondary'>
          <div class="container py-5">
            <div class="row">
              <div class="col-lg-6 justify-content-center text-center" id="contact-info">
                <h1 class='pb-3 italic-text'>Contáctenos</h1>
                <h4 class='pb-3'>Nueva Córdoba, Córdoba Capital, Argentina.</h4>
                <h4 class='pb-3'>contacto@verdebalcon.com</h4>
                <h4>+54 123-456-7890</h4>
              </div>
              <div class="col-lg-6">
                <form class="form" onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label htmlFor="name" class="form-label">Name:</label>
                    <input type="text" id="name" name="name" class="form-control" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="email" class="form-label">Email:</label>
                    <input type="email" id="email" name="email" class="form-control" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="telephone" class="form-label">Teléfono:</label>
                    <input type="text" id="telephone" name="telephone" class="form-control" required value={formData.telephone} onChange={handleChange} />
                  </div>
                  <button type="submit" class="btn btn-outline-success">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </section>



      </div>
    </div>
  );
}

export default Home;
