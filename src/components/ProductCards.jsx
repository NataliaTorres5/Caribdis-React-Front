import React from "react";
import {Link as LinkRouter} from 'react-router-dom';

import "../styles/ProductCards.css";
function ProductCards() {

    const items =[
        {
            src: 'https://i.im.ge/2024/09/08/fWL2fM.producto3.png',
            category: 'Mug',
            titleProduct:'Taza Tortuga',
            description: 'Taza con  asa en forma de tortuga',
            price: '$160.85',
            link: '/'

        },
        {
            src: 'https://i.im.ge/2024/09/08/fWL1Nh.producto2.png',
            category: 'Mug',
            titleProduct:'Taza Tiburon',
            description: 'Taza con  asa en forma de tiburon',
            price: '$160.85',
            link: '/'

        },
        {
            src: 'https://i.im.ge/2024/09/08/fWLOS8.producto1.png',
            category: 'Mug',
            titleProduct:'Taza Caballito de mar',
            description: 'Taza con  asa en forma de hipocampo',
            price: '$160.85',
            link: '/'

        },

        {
            src: 'https://i.im.ge/2024/09/08/fWLsg4.producto6.png',
            category: 'Prenda',
            titleProduct:'Camisa Marina',
            description: 'Camisa con fondo marino',
            price: '$260.50',
            link: '/'

        },
        {
            src: 'https://i.im.ge/2024/09/08/fWLq5D.producto5.png',
            category: 'Prenda',
            titleProduct:'Camisa Ballena Jorobada',
            description: 'Camisa con información de ballena',
            price: '$260.50',
            link: '/'

        },
        {
            src: 'https://i.im.ge/2024/09/08/fWLdrY.producto4.png',
            category: 'Prenda',
            titleProduct:'Camisa especies Tiburones',
            description: 'Camisa con distintas especies de tiburones',
            price: '$260.50',
            link: '/'

        },
        {
            src: 'https://i.im.ge/2024/09/08/fWLMrS.producto7.png',
            category: 'Plushie',
            titleProduct:'Peluche de medusa',
            description: 'Peluche suave de medusa',
            price: '$280.45',
            link: '/'

        },
        {
            src: 'https://i.im.ge/2024/09/08/fWLQ0z.producto8.png',
            category: 'Adopta',
            titleProduct:'Adopta un animal',
            description: 'Se el padrino de uno de nuestros animales, dale una vida feliz',
            price: '$100.45',
            link: '/'

        },



    ];

const itemView = (item) => {

    let imgu = item.src;

    return(

        <> <div class="shell">
        <div class="container-products">
          <div class="row-products">
            <div class="col-md-3 card-producr">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img
                    src={imgu}
                    alt={item.titleProduct}
                    class="img-responsive"
                  />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span> {item.category} </span>
                  </div>
                  <div class="title-product">
                    <h3>{item.titleProduct}</h3>
                  </div>
                  <div class="description-prod">
                    <p>
                     {item.description}
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left">
                      <span class="price">{item.price}</span>
                    </div>
                    <div class="wcf-right">
                      <LinkRouter to={item.link} class="buy-btn">
                        <i class="zmdi zmdi-shopping-basket"></i>
                      </LinkRouter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>

    )
}

  return (
    <>
          <div className="product-segment">
        {items.length > 0 && ( // Only render if items has elements
          <div className="slide-product">{items.map(itemView)}</div>
        )}
      </div>
    </>
  );
}

export default ProductCards;
