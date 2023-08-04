import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import VectorForward from '../../assets/Vector-forward.png'
import VectorBackward from '../../assets/Vector-backward.png'


export default function Carousel({pictures}) {

    const { id } = useParams();

    const [currentIndex, setCurrentIndex] = useState(0); 

    const slides = pictures

    const lastIndexSlide = slides.length - 1

    const uniqueSlide = slides.length === 1
    
    //Si c'est la première slide, alors on revient à l'index de fin du tableau, sinon on décrémente l'index de 1
    const previousSlide = () => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? lastIndexSlide : currentIndex - 1
      setCurrentIndex(newIndex);
    }

    // Si c'est la dernière slide, alors on repasse a l'index 0, sinon on incrémente l'index de 1
    const nextSlide = () => {
      const isLastSlide = currentIndex === lastIndexSlide
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
    }

  return (
    <div className="carousel-container">
      <div className='vector' style={{display: uniqueSlide ? 'none' : 'block'}} >
        <div className='vector__forward' onClick={nextSlide}>
          <img src={VectorForward} alt="Chevron suivant" />
        </div>
        <div className="vector__backward" onClick={previousSlide}>
          <img src={VectorBackward} alt="Chevron précédent" />
        </div>
        <div className='counter' style={{display: uniqueSlide ? 'none' : 'block'}}>
          <p>{`${currentIndex + 1}/${lastIndexSlide + 1}`}</p>
        </div>
      </div>
      <div className="carousel" key={id}>
       <img src={slides[currentIndex]} alt="Appartement" />
    </div>
    </div>
  )
}
