import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='container-fluid bg-dark text-white'>
        
          <div className='container'>
            <div className='row row-cols-1 row-cols-md-6'>
              <div className='col'>
                <i className='far fa-address-book'>
                  <span>+01754-867577</span>{' '}
                </i>
              </div>
              <div className='col'>
                <h1>For Better Inquery</h1>
                <br />
                <span>
                  <i className='far fa-address-book'></i>
                  <i class='fas fa-envelope-open'></i>
                </span>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer
