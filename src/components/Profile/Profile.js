import React from 'react'
import RatingScale from '../RatingScale/RatingScale';
import DefaultPicture from '../../assets/Host.png'


export default function Profile({pictures, name, rating}) {

  return (
    <div className='profile-container'>
        <div className="profile">
            <p className="profile__title">{name}</p>
            <img src={pictures ? pictures : DefaultPicture} alt={name} className="profile__img" />
        </div>
        <RatingScale ratingValue={rating}/>
    </div>
  )
}

