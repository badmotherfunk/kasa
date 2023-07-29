import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Chevron from '../../assets/chevron-up-solid.svg'

export default function Collapse({title, content, id}) {
    
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
            <span className={pathname === '/about' ? 'collapse__title' : 'collapse-title'}>{title}</span>
            <img src={Chevron} alt="Icone chevron" className={toggle ? "active" : ""}/>
        </button>

        <div className={toggle ? "toggle animated" : "toggle"}>
            <div className='toggle__text' aria-hidden={toggle ? true : false}>{content}</div>
        </div>

    </div>
  )
}
