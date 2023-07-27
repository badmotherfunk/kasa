import React from 'react'
import { useState } from 'react'
import Chevron from '../../assets/chevron-up-solid.svg'

export default function Collapse(props) {

    const [toggle, setToggle] = useState(false)

    const toggleState = () => {
        setToggle(!toggle)
    }

  return (
    <div className='collapse'>

        <button 
        onClick={toggleState}
        className='collapse__visible'>
            <span className='collapse__title'>{props.title}</span>
            <img src={Chevron} alt="Icone chevron" className={toggle && "active"}/>
        </button>

        <div
        className={toggle ? "toggle animated" : "toggle reverse"}
        >
            <p className='toggle__text' aria-hidden={toggle ? true : false}>{props.content}</p>
        </div>

    </div>
  )
}
