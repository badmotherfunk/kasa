import React from 'react'
import { announcement } from '../../datas/Announcement'
import { useParams } from 'react-router-dom'

export default function Accomodation() {
  const params = useParams();

  // const item = announcement.reduce(
  //   (acc, elem) =>
  //     acc.includes(elem.pictures) ? acc : acc.concat(elem.pictures),
  //     []
  // )
  // console.log(item)


  return (
    <div className='container'>
      <div className='card-announcement'>
        {announcement.map(({id, title, cover, pictures, location, description}) => (
          <div className="carousel" key={id}>
            <img src={cover} alt={`${title}`}  />
            <p>{`${description}`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
