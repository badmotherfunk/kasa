import React from 'react'
import {Link} from "react-router-dom"
import logo from '../../assets/LOGO.png'

export default function Banner() {
  return (
    <nav className='Banner'>
      <img src={logo} alt="Kasa" />
        <Link to="/" className="Banner__nav">Accueil</Link>
        <Link to="/about" className="Banner__nav">À propos</Link>
    </nav>
  )
}
