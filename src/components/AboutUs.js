import React from 'react'

import AboutImage from '../images/about-img-02.jpg'

const AboutUs = () => {
  return (
    <section id='about' className='my-5 heading_title'>
      <div className='container'>
        <h1 className='text-center text-uppercase'>
          <span style={{ borderBottom: '4px solid green' }}>About Us</span>
        </h1>
      </div>
      <div className='container shadow-lg mt-5'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2'>
          <div className='col'>
            <img
              src={AboutImage}
              alt='AboutUs'
              className='img-fluid img-thumbnail rounded mx-auto d-block'
            />
          </div>
          <div className='col d-flex justify-content-center flex-column fontAdd'>
            <h1>Best Laboratory Tests Available</h1>
            <ul className='list-group'>
              <li className='list-group-item h4'>Haematological Exam</li>
              <li className='list-group-item h4'>Biochemical Exam</li>
              <li className='list-group-item h4'>
                Elisa Method Hepatitis (Panel)
              </li>
              <li className='list-group-item h4'>HIV TEST</li>
              <li className='list-group-item h4'>Hormone Test</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
