import React from 'react'
import picture from '../../assets/Image source 1.png'
import picture2 from '../../assets/Image source 2.png'
import { useLocation } from 'react-router-dom'


export default function Banner() {

  const { pathname } = useLocation();
  
  return (
    <section className='banner'>
        <div className='banner__container'>
            <div className='banner__overlay'></div>
            <img src={pathname === "/" ? picture : picture2} alt="Paysage" className='banner__img' />
            <p className='banner__title'>{pathname === "/" ? "Chez vous, partout et ailleurs" : ""}</p>
        </div>
    </section>
  )
}
