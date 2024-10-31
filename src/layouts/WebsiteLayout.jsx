import React from 'react'
import HeaderPage from "../components/HeaderPage";
import Footer from '../components/Footer';

export default function WebsiteLayout(props) {
    /*los children son el contenido de distintas páginas que van dentro de la página 
    props: son los componentes de transmición de datos
    children caso de uso dentro de js
    
    console.log(props)*/ 
    

  return (
    <div>
        <HeaderPage/>

        {props.children}
        
        <Footer/>


    
    </div>
  )
}
