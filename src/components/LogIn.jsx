import React from "react";
import autheQueries from "../services/autheQueries";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const aux = new FormData(event.target);
    const data = Object.fromEntries(aux.entries());
    autheQueries.registroUsuario(data).then((response) => {
      console.log(response);
      if (response.token) {
        navigate("/signinsignup");
      } else {
        console.log(response.message);
      }
    });
  };

  return (
    <>
      {/* Sign Up / Log in */}

      <div className="box__form box--signup">
        <form onSubmit={handleSubmit} className="form-sign" id="form1">
          <div className="log-user">
            <input
              className="input-box"
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="log-user">
            <input
              className="input-box"
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="log-user">
            <input
              className="input-box"
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="log-user">
            <input
              className="input-box"
              type="text"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="btn-regist" type="submit">
            Registrate
          </button>
        </form>
      </div>
    </>
  );
}
export default LogIn;
