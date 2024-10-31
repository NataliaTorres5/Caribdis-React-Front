import React from 'react';
import '../styles/WelcomePage.css';
import Carousel from '../components/Carousel'
import Icons from '../components/HomeIcons'


function WelcomePage() {
 

return (
    

<>
<div className="home">
<div className="hero">
<div className="hero-container">
<div className="Hero-Background">
    <div className="Hero-CallToAction">
        <h1 className="H1 Hero-Title">Bienvenido <br/> <strong>El Oceano te llama</strong></h1>
        <h3 className="Hero-Text">Siente la brisa del mar y aprecia la maravilla debajo de la superficie </h3>
        <br />
        <button className='btn btn-primary'> Consigue tus entradas hoy
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> </button>
    </div>
</div>
</div>

</div>
<div className='Carousel-Home'>
 
 <Carousel />

 <Icons />
 


 </div>

</div>
</>
    

)


}

export default WelcomePage