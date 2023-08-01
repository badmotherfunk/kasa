import React, { useEffect } from 'react'
import { announcement } from '../../datas/Announcement'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Tags from '../../components/Tags/Tags';
import Profile from '../../components/Profile/Profile';
import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel';


export default function Accomodation() {

  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation()
  
  useEffect(() => {
    if (location.pathname !== `/accomodation/${id}`) {
      navigate('*');
    }
  })
  
  
  //Trouve l'id correspondant à la carte dans le tableau de data
  const apartments = announcement.find((apartment => apartment.id === id))
  
  // Parcour les éléments de la liste des équipements, et les insère dans une liste
  const listItems = apartments.equipments.map((equipment) =>
  <li key={equipment}>{equipment}</li>)

  return (
  <div className='container-announcement'>
    <div className='card-announcement'>
      <Carousel />
        <div className="container-info">
          <div className="announcement">
              <h1 className='announcement__title'>{apartments.title}</h1>
              <p className="announcement__location">{apartments.location}</p>
              <Tags className='announcement__tags' title={apartments.tags}/>
          </div>
            <Profile />
        </div>
    </div>
    <div className="collapse-container">
      <Collapse title='Description' content={apartments.description}/>
      <Collapse title='Équipements' content={<ul className='list-item'>{listItems}</ul>}/>
    </div>
  </div>
  )
}
