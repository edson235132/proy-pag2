import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/fzb7z68hkzawa9o.large_.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Agua En la Calles</h5>
        <p>Es el principal componente de la sangre que transporta químicos, nutrientes, oxígeno y dióxido de carbono por los órganos y el cuerpo.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2019/10/camaparaperroreciclada.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Camas recicladas</h5>
        <p>Es importante que los perros tengan un cama digna, mas que todo en epocas de invierno </p>
      </div>
    </div>
    <div class="carousel-item">
    
      <img src="https://media.informabtl.com/wp-content/uploads/2016/04/Imagen1-2-e1459739440579.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Comida en la Calles</h5>
        <p>Muchos perros en situacion de calle no cuentan con comida, esta es una iniciativa muy importante</p>
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
    </div>
  )
}