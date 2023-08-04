import React from 'react'
import { announcements } from '../../data/Announcements'
import { Link } from 'react-router-dom'


export default function Card() {
  return (
    <div className="container-global">

      <div className='container'>
        <div className='card-container'>
          {announcements.map(({id, title, cover}) => (
            <div key={id} className='card'>
              <Link to={`/accomodation/${id}`}>
                <div className="card__overlay"></div>
                <img src={cover} alt={`${title}`} className='card__img'/>
                <h2 className='card__title'>{title}</h2>
              </Link> 
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

