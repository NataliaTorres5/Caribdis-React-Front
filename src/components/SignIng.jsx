import React from 'react'
import autheQueries from "../services/autheQueries"
import { useDispatch } from "react-redux";
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import userActions from "../store/actions/userActions";

 function SignIng() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  });

  const handleChange = (event) => {
    console.log(formData);
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const aux = new FormData(event.target);
    const data = Object.fromEntries(aux.entries());
    autheQueries.singInUser(data).then((response) => {
      console.log(response, "handlesubmit consolelog");
      if (response.token) {
        dispatch(userActions.login(response));
        navigate("/profile");
      } else {
        console.log(response.message, "no hay usuario")
      }
    });
  }
  
  return (
    <>
 {/* Sign In   */ }  
            <div className="  box__form box--signin">
          <form onSubmit={handleSubmit} className="form-sign" id="form2">
            <h2 className="form__title">Ingresa</h2>
            
            <div className="log-user">
          <input className="input-box"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />      
        </div>

        <div className="log-user">
          <input className="input-box"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />      
        </div>
            <a href="." className="link-recov">Olvidaste tu contraseña?</a>
            <button type="submit" className="btn-regist">Ingresa</button>
          </form>
        </div>
    </>
  )
}

export default SignIng