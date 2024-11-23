import React from 'react'

function idelProduct() {
  return (

    <div>

      <section className="section product">
        <div className="container">

          <h2 className="h2 section-title">Productos más populares</h2>

          <ul className="filter-list">

            <li>
              <button className="filter-btn  active">All</button>
            </li>

            <li>
              <button className="filter-btn">Camisas</button>
            </li>

            <li>
              <button className="filter-btn">Mugs</button>
            </li>

            <li>
              <button className="filter-btn">Plushies</button>
            </li>

            <li>
              <button className="filter-btn">Llaveros
              </button>
            </li>

            <li>
              <button className="filter-btn">Adopta</button>
            </li>

          </ul>

          <ul className="product-list">

            <li className="product-item">
              <div className="product-card">

                <figure className="card-banner">
                  <img src="assets/img/producto1.png" width="312" height="350" loading="lazy"
                    alt="Caballito de Mar" className="image-contain"/>

                  <div className="card-badge">Nuevo</div>

                  <ul className="card-action-list">

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">Añadir a carrito</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">Deseados</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-3">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">Vista rápida</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-4">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">Comparar</div>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Mug</a> /
  
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Taza Caballito de Mar</a>
                  </h3>

                  <data className="card-price" value="180.85">$180.85</data>

                </div>

              </div>
            </li>

            <li className="product-item">
              <div className="product-card">

                <figure className="card-banner">
                  <img src="assets/img/producto2.png" width="312" height="350" loading="lazy"
                    alt="Taza Tiburón" className="image-contain"/>

                  <ul className="card-action-list">

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">Añadir a carrito</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">Deseados</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-3">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">Vista rápida</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-4">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">Comparar</div>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Mug</a> /
                
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Taza Tiburón </a>
                  </h3>

                  <data className="card-price" value="190.85">$190.85</data>

                </div>

              </div>
            </li>

            <li className="product-item">
              <div className="product-card" >

                <figure className="card-banner">
                  <img src="assets/img/producto3.png" width="312" height="350" loading="lazy"
                    alt="Taza Tortuga" className="image-contain"/>

                  <div className="card-badge">Nuevo</div>

                  <ul className="card-action-list">

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">Añadir a carrito</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">Deseados</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-3">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">Vista rápida</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-4">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">Comparar</div>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Mug</a> 
                    
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Taza Tortuga</a>
                  </h3>

                  <data className="card-price" value="160.85">$160.85</data>

                </div>

              </div>
            </li>

            <li className="product-item">
              <div className="product-card">

                <figure className="card-banner">
                  <img src="assets/img/producto4.png" width="312" height="350" loading="lazy"
                    alt="Camisa Tiburon" className="image-contain"/>

                  <div className="card-badge"> -25%</div>

                  <ul className="card-action-list">

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">Añadir a carrito</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">Deseados</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-3">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">Vista rápida</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-4">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">Comparar</div>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Hombre</a> /
                    <a href="#" className="card-cat-link">Mujer</a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Camisa tiburon </a>
                  </h3>

                  <data className="card-price" value="170.85">$170.85 <del>$200.21</del></data>

                </div>

              </div>
            </li>

            <li className="product-item">
              <div className="product-card">

                <figure className="card-banner">
                  <img src="assets/img/producto5.png" width="312" height="350" loading="lazy"
                    alt="Camisa ballena" className="image-contain"/>

                  <div className="card-badge">Nuevo</div>

                  <ul className="card-action-list">

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">Añadir a carrito</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">Deseados</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-3">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">Vista rápida</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-4">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">Comparar</div>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Hombre</a> /
                    <a href="#" className="card-cat-link">Mujer</a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Camisa Ballena</a>
                  </h3>

                  <data className="card-price" value="120.85">$120.85</data>

                </div>

              </div>
            </li>

            <li className="product-item">
              <div className="product-card" >

                <figure className="card-banner">
                  <img src="assets/img/producto6.png" width="312" height="350" loading="lazy"
                    alt="Camisa Delfines" className="image-contain"/>

                  <ul className="card-action-list">

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">Añadir a carrito</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">Deseados</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-3">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">Vista rápida</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-4">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">Comparar</div>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Hombre</a> /
                    <a href="#" className="card-cat-link">Mujer</a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#"> Camisa de delfines</a>
                  </h3>

                  <data className="card-price" value="100.85">$100.85</data>

                </div>

              </div>
            </li>

            <li className="product-item">
              <div className="product-card">

                <figure className="card-banner">
                  <img src="assets/img/producto7.png" width="312" height="350" loading="lazy"
                    alt="Plushie Medusa" className="image-contain"/>

                  <ul className="card-action-list">

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">Añadir a carrito</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">Deseados</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-3">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">Vista rápida</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-4">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">Comparar</div>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Plushie</a> 
                 
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Plushie Medusa</a>
                  </h3>

                  <data className="card-price" value="120.85">$120.85</data>

                </div>

              </div>
            </li>

            <li className="product-item">
              <div className="product-card">

                <figure className="card-banner">
                  <img src="assets/img/producto8.png" width="312" height="350" loading="lazy"
                    alt="Cuadro" className="image-contain"/>

                  <ul className="card-action-list">

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">Añadir a carrito</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">Deseados</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-3">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">Vista rápida</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-4">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">Comparar</div>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Adopta</a> 
                  
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Adopta a un animal marino</a>
                  </h3>

                  <data className="card-price" value="100.85">$100.85</data>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </div>
  )
}

export default idelProduct