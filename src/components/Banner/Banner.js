import React from 'react'
import picture from '../../assets/Image source 1.png'

export default function Banner() {
  return (
    <section className='banner'>
        <div className='banner__container'>
            <div className='banner__overlay'></div>
            <img src={picture} alt="Falaise" className='banner__img' />
            <p className='banner__title'>Chez vous, partout et ailleurs</p>
        </div>
    </section>
  )
}
