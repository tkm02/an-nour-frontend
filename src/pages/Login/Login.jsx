import React from 'react'
import logo from "../../assets/ANNOUR LOGO 1.png"
import "./Login.css"
const Login = () => {
  return (
    <div className='login-form'>
      <div className='left'>
        <img src={logo} alt="logo-an-nour"/>
        <h3>An Nour, pour une spiritualité étincelante.</h3>
      </div>
      <div className='right'>
        <form className='container-form'>
            <h2>Connexion</h2>
            <input type="text" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <a href="#">Mot de passe oublié</a>
            <button>Se connecter</button>
        </form>
      </div>
    </div>
  )
}

export default Login
