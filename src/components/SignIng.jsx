import React from 'react'

export default function SignIng() {
  return (
    <>
 {/* Sign In   */ }  
            <div className="  box__form box--signin">
          <form action="#" className="form-sign" id="form2">
            <h2 className="form__title">Ingresa</h2>
            <input type="email" placeholder="Email" className="input-box" />
            <input type="password" placeholder="Contraseña" className="input-box" />
            <a href="." className="link-recov">Olvidaste tu contraseña?</a>
            <button className="btn-regist">Ingresa</button>
          </form>
        </div>
    </>
  )
}
