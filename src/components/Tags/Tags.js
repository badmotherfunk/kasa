import React from 'react'


export default function Tags({title}) {

  return (
    <div className='tags-container'>
        <div className="tags">
        {title.map((title, index) => (
            <p className='tags__content'>{title}</p>
        ))}
        </div>
    </div>
  )

}
