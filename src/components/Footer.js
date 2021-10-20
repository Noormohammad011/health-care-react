import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='container-fluid bg-dark text-white'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-md-3 d-flex justify-content-between'>
            <div className='col d-flex justify-content-center align-items-center'>
              <figure>
                <blockquote className='blockquote'>
                  <p>
                    The art of medicine consists in amusing the patient while
                    nature cures the disease.
                  </p>
                </blockquote>
                <figcaption className='blockquote-footer'>Voltire</figcaption>
              </figure>
            </div>
            <div className='col'>
              <div className='d-flex justify-content-center flex-column'>
                <h1 className='text-center fontAdd'>
                  {' '}
                  <span>For Better Inquery</span>
                </h1>
                <div>
                  <span>
                    <i className='far fa-address-book fa-2x my-2'>
                      <span className='mx-2'>Jigatola Dhaka</span>
                    </i>
                  </span>
                </div>
                <div>
                  <span>
                    <i className='fas fa-envelope-open fa-2x my-2'>
                      <span className='mx-2'>noor@gmail.com</span>
                    </i>
                  </span>
                </div>
                <div>
                  <span>
                    <i className='far fa-address-book fa-2x my-2'>
                      <span className='mx-2'>+01754-867577</span>{' '}
                    </i>
                  </span>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
