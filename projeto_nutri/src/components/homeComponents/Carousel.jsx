import React from "react";
import "../../styles/EstilosGerais.css";

{/*
    Procurar css correspondentes faltantes
    Arrumar o src
      */}

function Carousel() {
  return (
    <section id="banner" className="mb-4">

      {/* Carrossel de assets */}
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="src/assets/talvez banner.jpg" className="d-block w-100 banner-img" alt="Banner 1" />
          </div>

          <div className="carousel-item">
            <img src="src/assets/possivel banner.jpg" className="d-block w-100 banner-img" alt="Banner 2" />
          </div>

          <div className="carousel-item">
            <img src="src/assets/muito banner.jpg" className="d-block w-100 banner-img" alt="Banner 3" />
          </div>

          <div className="carousel-item">
            <img src="src/assets/Banner 04.jpeg" className="d-block w-100 banner-img last-banner" alt="Banner 4" />
          </div>
        </div>

        {/* Controles do carrossel */}
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>

        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Próximo</span>
        </a>
      </div>
      
    </section>
  );
}

export default Carousel;