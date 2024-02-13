import '../hojas-de-estilo/accesorios.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';

import maceta1 from '../imagenes/maceta-ceramica1.jpeg';
import maceta2 from '../imagenes/maceta-ceramica2.jpeg';
import maceta3 from '../imagenes/maceta-ceramica3.jpeg';
import maceta4 from '../imagenes/maceta-ceramica4.jpeg';
import maceta5 from '../imagenes/maceta-ceramica5.jpeg';
import maceta6 from '../imagenes/maceta-ceramica6.jpeg';
import maceta7 from '../imagenes/maceta-ceramica7.jpeg';
import maceta8 from '../imagenes/maceta-ceramica8.jpeg';



function Accesorios() {

  const macetas = [maceta1, maceta2, maceta3, maceta4, maceta5, maceta6, maceta7, maceta8]

  const [imagenActual, setImagenActual] = useState(0);

  const retrocederImagen = ()=> {
    setImagenActual((prev) => (prev === 0? macetas.length -1: prev - 1))
  } 

  const avanzarImagen = ()=> {
    setImagenActual((prev) => (prev === macetas.length -1 ? 0 : prev + 1))
  }


  return (

    <div className='container-accesorios'>
      <IoIosArrowBack className='arrow' onClick={retrocederImagen} />
      <div className='container-image-macetas'>
        {macetas.map((maceta, index) => (
          <div key={index} className='maceta-name'>
            <img src={maceta} alt={`maceta-${index + 1}`} className='image' 
            style={{ transform: `translateX(${100 * (index - imagenActual)}%)` }}/>
          </div>
        ))}
      </div>
      <IoIosArrowForward className='arrow' onClick={avanzarImagen} />
    </div>
  )
};

export default Accesorios;















