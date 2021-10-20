import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '../import'
const Services = () => {
  return (
    <section id='services' className='my-5'>
      <div className='container'>
        <h1 className='text-center text-uppercase heading_title'>
          <span style={{ borderBottom: '4px solid green' }}>Services</span>
        </h1>
      </div>

      <div className='container mt-4'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {services.map((x) => (
            <div className='col' key={x.id}>
              <div className='card h-100'>
                <img src={x.image} className='card-img-top' alt={x.title} />
                <div className='card-body'>
                  <h5 className='card-title'>{x.title}</h5>
                  <p className='card-text'>
                    {x.description.slice(0, 30) + '...'}
                  </p>
                </div>
                <div className='card-footer'>
                  <Link to={`/services/${x.id}`}>
                    <div className='d-grid gap-2'>
                      <button className='btn btn-primary' type='button'>
                        Button
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
