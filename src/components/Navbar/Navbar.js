import React from 'react'
import {Link} from "react-router-dom"
import logo from '../../assets/LOGO.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/">
      <img src={logo} alt="Kasa" />
      </Link>
      <div className='navbar__nav'>
        <Link to="/" className='nav-link'>Accueil</Link>
        <Link to="/about" className='nav-link'>À propos</Link>
      </div>
    </nav>
  )
}
