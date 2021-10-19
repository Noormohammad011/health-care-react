import React from 'react'
import { Carousel } from 'react-bootstrap'
import AboutUs from '../components/AboutUs'
import Blog from '../components/Blog'
import Gallery from '../components/Gallery'
import Services from '../components/Services'

import { courasolIndex } from '../import'

const Home = () => {
  return (
    <div id='home'>
      <Carousel>
        {courasolIndex.map((x) => (
          <Carousel.Item key={x.id} interval={x.intervalTime}>
            <img
              className='d-block'
              src={x.image}
              style={{ height: 600, width: '100%' }}
              alt={x.image}
            />
            <Carousel.Caption>
              <h3
                style={{ color: '#254358', fontFamily: 'Roboto' }}
                className='text-uppercase fs-2 fw-bold'
              >
                {x.camptionTitle}
              </h3>
              <p style={{ color: 'black' }} className='text-uppercase fs-4'>
                {x.captionDescription}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <AboutUs />
      <Services />
      <Gallery />
      <Blog />
      {/* <Contact /> */}
    </div>
  )
}

export default Home
