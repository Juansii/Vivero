import { useState } from 'react';
import '../hojas-de-estilo/form.css'

function Form() {

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
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className='main-container-form' id='contacto'>
      <div className='contact'>
        <h1> Contáctenos </h1>
        <h3> Nueva Córdoba, Córdoba Capital, Argentina. </h3>
        <h4> contacto@verdebalcon.com</h4>
        <h4> +54 123-456-7890 </h4>
      </div>

      <div className='container-form'>
        <form className='form' onChange={handleSubmit}>
          <div className='contain-label'>
            <label for="name">Name: </label> <br />
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className='contain-label'>
            <label for="name">Email: </label> <br />
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className='contain-label'>
            <label for="name">Teléfono: </label> <br />
            <input type="text" id="telephone" name="telephone" required value={formData.telephone} onChange={handleChange} />
          </div>
          <button type='submit' className='button-form'> Enviar </button>
        </form>
      </div>
    </div>
  )
}

export default Form;