import React, { useState } from "react";
import '../styles/HeaderDropDown.css'
import {Link as LinkRouter} from 'react-router-dom'
function HeaderDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown-icon">
      <button className="dropdown-menu" onClick={toggleDropdown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill={isOpen ? 'hsl(5, 100%, 69%)' : 'currentcolor'}
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="dropdown-item-box">
          <span className="d-item d-item-1"> <LinkRouter to="/signinsignup">Ingresar</LinkRouter></span>
        

        </ul>
      )}
    </div>
  );
}

export default HeaderDropDown;
