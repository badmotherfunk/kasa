import React from 'react'
import { annoucement } from '../../datas/Announcement'



export default function Card() {
  return (
    <div className="container-global">

      <div className='container'>
        <div className='card-container'>
          {annoucement.map(({id, title, cover}) => (
            <div key={id} className='card'>
              <div className="card__overlay"></div>
              <img src={cover} alt={`${title}`} className='card__img'/>
              <h2 className='card__title'>{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

