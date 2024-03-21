import '../hojas-de-estilo/frequentlyasked.css';
import React from 'react';

function FrequentlyAsked() {
  return (
    <div class='container py-5 text-center'>
      <h1 class='pb-5 text-secondary'> Las preguntas más frecuentes que nos realizan nuestros clientes </h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item border-success border-2 mb-5 shadow">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Pregunta N1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              aca es donde se visualiza la respuesta pudiendo jugar con distintos elementos, <strong> ej: negrita. </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-success border-2 mb-5">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Pregunta N2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              aca es donde se visualiza la respuesta pudiendo jugar con distintos elementos, <strong> ej: negrita. </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-success border-2 mb-5 shadow">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Pregunta N3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              aca es donde se visualiza la respuesta pudiendo jugar con distintos elementos, <strong> ej: negrita, en caso de ser necesario </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-success border-2 mb-5 shadow">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Pregunta N4
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              aca es donde se visualiza la respuesta pudiendo jugar con distintos elementos, <strong> ej: negrita, en caso de ser necesario </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-success border-2 mb-5 shadow">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Pregunta N5
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              aca es donde se visualiza la respuesta pudiendo jugar con distintos elementos, <strong> ej: negrita, en caso de ser necesario </strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FrequentlyAsked;
