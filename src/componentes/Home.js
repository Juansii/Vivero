import { useState, useEffect } from 'react';
import trabajador from '../imagenes/trabajador-vivero.jpeg';
import planta from '../imagenes/planta-i1.jpeg';
import planta2 from '../imagenes/planta-i2.jpeg';
import planta3 from '../imagenes/planta-i3.jpeg'
import stock1 from '../imagenes/stock1.jpg'
import stock2 from '../imagenes/stock2.jpg'
import stock3 from '../imagenes/stock3.jpg'

import '../hojas-de-estilo/home.css'

function Home() {

  const [titulo, setTitulo] = useState('Algunos de nuestros productos: ');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitulo('¡Explora nuestra colección!');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  
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
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={planta} class="d-block mx-auto img-fluid" alt="plant1" />
              </div>
              <div class="carousel-item">
                <img src={planta2} class="d-block mx-auto img-fluid" alt="plant2" />
              </div>
              <div class="carousel-item">
                <img src={planta3} class="d-block mx-auto img-fluid" alt="plant3" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>


        <section class='col-12 py-5 mb-4 bg-light bg-gradient'>
          <div class='row'>
            <div class='col-lg-6 d-flex align-items-center bg-'>
              <div class='bg-secundary'>
                <h2 class='pb-5'><i>Sobre Nosotros</i></h2>
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


        <section class='col-12 py-5 mb-4 bg-light'>
        <h3 class='text-center py-5' onClick={() => setTitulo('¡Explora nuestra colección!')}>{titulo}</h3>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={stock1} class="d-block mx-auto img-fluid img-thumbnail w-50" alt="producto-en-stock" />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class='text-dark bg-light'>PLANTAS DE INTERIOR</h5>
                  <p class='text-dark bg-light'>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={stock2} class="d-block mx-auto img-fluid img-thumbnail w-50" alt="producto-en-stock" />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class='text-dark bg-light'>FERTILIZANTES</h5>
                  <p class='text-dark bg-light'>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={stock3} class="d-block mx-auto img-fluid img-thumbnail w-50" alt="producto-en-stock" />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class='text-dark bg-light'>MACETAS</h5>
                  <p class='text-dark bg-light'>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
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
