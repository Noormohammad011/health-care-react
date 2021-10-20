import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { images } from '../import'



const Gallery = () => {
const handleDragStart = (e) => e.preventDefault()
  return (
    <section id='gallery' className='my-5'>
      <div className='container'>
        <h1 className='text-center text-uppercase heading_title'>
          <span style={{ borderBottom: '4px solid green' }}>Gallery</span>
        </h1>
      </div>
      <div className='container my-5'>
        <AliceCarousel autoPlay autoPlayInterval='3000'>
          {images.map((x) => (
            <img
              src={x.original}
              className='sliderimg'
              onDragStart={handleDragStart}
              alt={x.original}
            />
          ))}
        </AliceCarousel>
      </div>
    </section>
  )
}

export default Gallery
