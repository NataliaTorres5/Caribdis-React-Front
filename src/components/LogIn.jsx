import React from 'react'


export default function LogIn() {
  return (
    <>     
        
        {/* Sign Up / Log in */ }  
    <div className="box__form box--signup">
      <form action="#" className="form-sign" id="form1">
        <h2 className="form__title">Registrate</h2>
        <input type="text" placeholder="Nombre" className="input-box" />
        <input type="text" placeholder="Apellido" className="input-box" />
        <input type="email" placeholder="Email" className="input-box" />
        <input type="password" placeholder="Contraseña" className="input-box" />
        <button className="btn-regist">Registrate</button>
      </form>
    </div>
  </>
  )
}
