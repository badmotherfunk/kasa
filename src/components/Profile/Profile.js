import React from 'react'
import { useParams } from 'react-router-dom';
import { announcement } from '../../datas/Announcement';
import RatingScale from '../RatingScale/RatingScale';
import host from '../../assets/Host.png'


export default function Profile() {

    const { id } = useParams();
    
    //Trouve l'id correspondant à la carte dans le tableau de data
    const profile = announcement.find((apartment => apartment.id === id))

    let user = profile.host.name;
    let picture = profile.host.picture

  return (
    <div className='profile-container'>
        <div className="profile">
            <p className="profile__title">{user}</p>
            <img src={picture ? picture : host} alt={user} className="profile__img" />
        </div>
        <RatingScale ratingValue={profile.rating}/>
    </div>
  )
}
