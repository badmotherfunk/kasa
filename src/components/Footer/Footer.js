import React from 'react'
import logo from '../../assets/Footer-logo.png'


export default function Footer() {
  return (
    <div className='footer'>
        <img src={logo} alt="logo kasa" className='footer_logo' />
        <p className='footer__txt'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
