import React from 'react'

const Services = () => {
  return (
    <section id='services' className='my-5'>
      <div className='container'>
        <h1 className='text-center text-uppercase'>
          <span style={{ borderBottom: '4px solid green' }}>Services</span>
        </h1>
      </div>

      <div cclassName='container'>
        <div cclassName='row row-cols-1 row-cols-md-3'>
          <div cclassName='col'>Column</div>
          <div cclassName='col'>Column</div>
          <div cclassName='col'>Column</div>
          <div cclassName='col'>Column</div>
        </div>
      </div>
    </section>
  )
}

export default Services
