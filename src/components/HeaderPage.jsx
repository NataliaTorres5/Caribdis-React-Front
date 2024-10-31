import React from "react";
import CaribdisLogo from "../media/img/CaribdisLogo.png";
import HeaderDropDown from "./HeaderDropDown";
import {Link as LinkRouter} from 'react-router-dom'

/*import person from "../media/icons/person-bounding-box.svg";*/
import "../styles/Header.css";

function HeaderPage(props) {

  
  return (
    <div>
      <header className="header">
        <div className="container-header">
          <a href=".com" className="logo">
            <img
              src={CaribdisLogo}
              width="150"
              height="150"
              alt="Caribdislogo"
            />
          </a>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <LinkRouter to='/' className="navbar-link">
                  Inicio
                </LinkRouter>
              </li>

              <li className="navbar-item">
                <LinkRouter to='/blog' className="navbar-link">
                  Blog
                </LinkRouter>
              </li>

              <li className="navbar-item">
                <LinkRouter to='/contactus' className="navbar-link">
                  Contacto
                </LinkRouter>
              </li>
            </ul>
            
          </nav>

          <HeaderDropDown />
        </div>
        <div className="lowerHeader">
          <div>
            <ol className="lowerContainer">
              <li className="navbar-item header2">
                <LinkRouter to='/visit' className="navbar-link">
                  Acuario
                </LinkRouter>
              </li>

              <li className="navbar-item header2">
                <LinkRouter to='/animals' className="navbar-link">
                  Animales
                </LinkRouter>
              </li>

              <li className="navbar-item header2">
                <LinkRouter to='/store' className="navbar-link">
                  Tienda
                </LinkRouter>
              </li>
            </ol>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderPage;
