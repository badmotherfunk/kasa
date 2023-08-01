import React from 'react'
import {Link} from "react-router-dom"
import logo from '../../assets/LOGO.png'
import { useLocation } from 'react-router-dom'


export default function Navbar() {

  const { pathname } = useLocation();

  return (
    <nav className='navbar'>
      <Link to="/">
      <img src={logo} className='kasa-logo' alt="Kasa" />
      </Link>
      <div className='navbar__nav'  >
        <Link to="/" className={pathname === "/" ? "nav-link active" : "nav-link"}>Accueil</Link>
        <Link to="/about" className={pathname === "/about" ? "nav-link active" : "nav-link"}>À propos</Link>
      </div>
    </nav>
  )
}
