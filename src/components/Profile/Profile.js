import React from 'react'
import { useParams } from 'react-router-dom';
import { announcement } from '../../datas/Announcement';
import StarActive from '../../assets/star-active.png'
import StarInactive from '../../assets/star-inactive.png'

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
            <img src={picture} alt={user} className="profile__img" />
        </div>
        <div className="rating-container">
            <img src={StarActive} alt="Étoiles attribuées" className="rating" />
            <img src={StarInactive} alt="Étoiles non attibuées" className="rating" />
        </div>
    </div>
  )
}
