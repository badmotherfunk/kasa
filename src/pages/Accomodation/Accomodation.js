import React from 'react'
import { announcement } from '../../datas/Announcement'
import { useParams } from 'react-router-dom'
import Tags from '../../components/Tags/Tags';
import Collapse from '../../components/Collapse/Collapse';

export default function Accomodation() {
  const { id } = useParams();

  //Trouve l'id correspondant a la carte dans le tableau de data
  const apartments = announcement.find((apartment => apartment.id === id))

  // Filtre la liste des équipements dans une liste
  const listItems = apartments.equipments.map((equipment) =>
  <li>{equipment}</li>)

  return (
  <div className='container-announcement'>
    <div className='card-announcement'>
        <div className="carousel" key={id}>
          <img src={apartments.pictures[0]} alt={apartments.title} />
        </div>
        <div className="announcement">
            <h1 className='announcement__title'>{apartments.title}</h1>
            <p className="announcement__location">{apartments.location}</p>
            <Tags className='announcement__tags' title={apartments.tags}/>
        </div>
    </div>
    <div className="collapse-container">
      <Collapse title='Description' content={apartments.description}/>
      <Collapse title='Équipements' content={<ul className='list-item'>{listItems}</ul>}/>
    </div>
  </div>
  )
}
