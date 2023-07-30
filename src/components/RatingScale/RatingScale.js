import React from 'react'
import StarActive from '../../assets/star-active.png'
import StarInactive from '../../assets/star-inactive.png'


export default function RatingScale(props) {

    const ratingValue = props.ratingValue

    const range = [1, 2, 3, 4, 5]

    // On map dans le tableau range pour trouver la correspondance des éléments, et on les affiche
  return (
    <div className='rating' >
        {range.map((rangeElem) => 
        ratingValue >= rangeElem ? <img src={StarActive} alt="Étoile active" key={rangeElem.toString()}/> : <img src={StarInactive} alt="Étoile inactive" key={rangeElem.toString()}/>
        )}
    </div>
  )
}
