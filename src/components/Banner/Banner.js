import React from 'react'
import picture from '../../assets/Image source 1.png'
import picture2 from '../../assets/Image source 2.png'
import { useLocation } from 'react-router-dom'


export default function Banner() {

  const { pathname } = useLocation();
  
  return (
    <section className='banner'>
        <div className='banner__container'>
            <div className={pathname === '/kasa' ? 'banner__overlay' : "banner__background"}></div>
            <img src={pathname === '/kasa' ? picture : picture2} alt="Paysage" className={pathname === '/kasa' ? 'banner__img' : 'banner__picture'} />
            <p className='banner__title'>{pathname === '/kasa' ? 'Chez vous, partout et ailleurs' : ''}</p>
        </div>
    </section>
  )
}
