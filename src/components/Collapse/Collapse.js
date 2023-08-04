import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Chevron from '../../assets/chevron-up-solid.svg'


export default function Collapse({title, content}) {
    
    const { pathname } = useLocation()

    const [toggle, setToggle] = useState(false)

    //Change l'état en foncition du toggle
    const toggleState = () => {
        setToggle(!toggle)
    }


  return (
    <div className={pathname === '/about' ? 'collapse' : 'announcement-collapse'}>

        <button 
        onClick={toggleState}
        className='collapse__visible'>
            <span className={pathname === '/about' ? 'collapse__title' : 'collapse__heading'}>{title}</span>
            <img src={Chevron} alt="Icone chevron" className={toggle ? "active" : ""}/>
        </button>

        <div className={toggle ? "toggle animated" : "toggle"}>
            <div className={pathname === '/about' ? 'toggle__text' : 'description__text'} aria-hidden={toggle ? true : false}>{content}</div>
        </div>

    </div>
  )
}
