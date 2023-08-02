import { announcement } from '../../datas/Announcement'
import {useParams, Navigate } from 'react-router-dom'
import Tags from '../../components/Tags/Tags';
import Profile from '../../components/Profile/Profile';
import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel';


export default function Accomodation() {

  const { id } = useParams();

  //Trouve l'id correspondant à la carte dans le tableau de data/ Sinon renvoie vers la page d'erreur
  const apartments = announcement.find((apartment => apartment.id === id))
    if (!apartments) {
    return <Navigate to='*' />;
    }
  
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
