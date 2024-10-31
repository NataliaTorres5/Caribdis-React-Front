import React from "react";
import "../styles/HomeIcons.css";
import service1 from'../media/img/service1.png'
import service2 from '../media/img/service-2.png'
import service3 from '../media/img/service-3.png'
import  service4 from '../media/img/service-4.png'

function HomeIcons() {


  return (
    <>
      { /*<div className="IconSegment">
        
          <div className="icon-home"> {icons.map(iconView)} </div>
        
      </div> */}

<div class="container">

<ul class="service-list">

  <li class="service-item">
    <div class="service-card">

      <div class="card-icon">
        <img src={service1} width="53" height="28" loading="lazy" alt="Service icon"/>
      </div>

      <div>
        <h3 class="h4 card-title">Envio gratis</h3>

        <p class="card-text">
          Para ordenes por encima de <span>$150</span>
        </p>
      </div>

    </div>
  </li>

  <li class="service-item">
    <div class="service-card">

      <div class="card-icon">
        <img src={service2} width="43" height="35" loading="lazy" alt="Service icon"/>
      </div>

      <div>
        <h3 class="h4 card-title">Pago rápido</h3>

        <p class="card-text">
          100% seguro
        </p>
      </div>

    </div>
  </li>

  <li class="service-item">
    <div class="service-card">

      <div class="card-icon">
        <img src={service3} width="40" height="40" loading="lazy" alt="Service icon"/>
      </div>

      <div>
        <h3 class="h4 card-title">Devolución gratuita</h3>

        <p class="card-text">
          dentro de 30 días
        </p>
      </div>

    </div>
  </li>

  <li class="service-item">
    <div class="service-card">

      <div class="card-icon">
        <img src={service4} width="40" height="40" loading="lazy" alt="Service icon"/>
      </div>

      <div>
        <h3 class="h4 card-title">24/7 asistencia</h3>

        <p class="card-text">
          Necesitas ayuda?
        </p>
      </div>

    </div>
  </li>

</ul>

</div>
    </>
  );
}

export default HomeIcons;
