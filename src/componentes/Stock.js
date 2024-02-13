import React, { useState } from 'react';
import '../hojas-de-estilo/stock.css';
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

import planta1 from '../imagenes/planta-diafembaquia.jpeg';
import planta2 from '../imagenes/planta-monstera.jpeg';
import planta3 from '../imagenes/planta-oreja-elefante.jpeg';
import planta4 from '../imagenes/planta-palmerita.jpeg';
import planta5 from '../imagenes/planta-potus.jpeg';
import planta6 from '../imagenes/planta-sanseviera.jpeg';
import planta7 from '../imagenes/planta-verde.jpeg';


function Stock() {
  const plantas = [planta1, planta2, planta3, planta4, planta5, planta6, planta7];

  const [imagenActual, setImagenActual] = useState(0);

  const retrocederImagen = () => {
    setImagenActual((prev) => (prev === 0 ? plantas.length - 1 : prev - 2));
  };

  const avanzarImagen = () => {
    setImagenActual((prev) => (prev === plantas.length - 1 ? 0 : prev + 2));
  };

  return (
    <div className='container-stock'>
      <IoIosArrowBack className='arrow' onClick={retrocederImagen} />
      <div className='container-image'>
        {plantas.map((planta, index) => (
          <div
            key={index}
            className='plant-name'
            style={{ transform: `translateX(${100 * (index - imagenActual)}%)` }}>
            <img src={planta} alt={`planta-${index + 1}`} className='image' />
          </div>
        ))}
      </div>
      <IoIosArrowForward className='arrow' onClick={avanzarImagen} />
    </div>
  );
}



export default Stock;




