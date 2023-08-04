import { announcements } from '../../data/Announcements'
import {useParams, Navigate } from 'react-router-dom'
import Tags from '../../components/Tags/Tags';
import Profile from '../../components/Profile/Profile';
import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel';


export default function Accomodation() {

  const { id } = useParams();

  //Trouve l'id correspondant à la carte dans le tableau de data/ Sinon renvoie vers la page d'erreur
  const apartment = announcements.find((apartment => apartment.id === id))
    if (!apartment) {
    return <Navigate to='*' />;
    }
  
  // Parcour les éléments de la liste des équipements, et les insère dans une liste
  const listItems = apartment.equipments.map((equipment) =>
  <li key={equipment}>{equipment}</li>)

  return (
  <div className='container-announcement'>
    <div className='card-announcement'>
      <Carousel pictures={apartment.pictures} />
        <div className="container-info">
          <div className="announcement">
              <h1 className='announcement__title'>{apartment.title}</h1>
              <p className="announcement__location">{apartment.location}</p>
              <Tags className='announcement__tags' title={apartment.tags}/>
          </div>
            <Profile pictures={apartment.host.picture} name={apartment.host.name} rating={apartment.rating} />
        </div>
    </div>
    <div className="collapse-container">
      <Collapse title='Description' content={apartment.description}/>
      <Collapse title='Équipements' content={<ul className='list-item'>{listItems}</ul>}/>
    </div>
  </div>
  )
}
