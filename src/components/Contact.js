import React from 'react'
import useAuth from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

const Contact = () => {
  const { user } = useAuth()
  const history = useHistory()
  return (
    <section id='contact' className='my-5'>
      <div className='container'>
        <h1 className='text-center text-uppercase'>
          <span style={{ borderBottom: '4px solid green' }}>Contact</span>
        </h1>
      </div>
      <div className='container my-5'>
        <div className='d-flex flex-column align-items-center'>
          <form className='row g-3'>
            <div className='col-md-6'>
              <label htmlFor='inputEmail4' className='form-label'>
                Email
              </label>
              <input type='email' className='form-control' id='inputEmail4' />
            </div>
            <div className='col-md-6'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input type='text' className='form-control' id='name' />
            </div>
            <div className='col-12'>
              <label htmlFor='inputAddress' className='form-label'>
                Address
              </label>
              <input
                type='text'
                className='form-control'
                id='inputAddress'
                placeholder='1234 Main St'
              />
            </div>

            <div className='col-12'>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlTextarea1'
                  className='form-label'
                >
                  Fill Free to submit
                </label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </div>
            </div>

            <div className='col-12'>
              <div className='d-grid '>
                {user ? (
                  <button className='btn btn-primary' type='button'>
                    Submit
                  </button>
                ) : (
                  <button
                    className='btn btn-primary'
                    type='button'
                    onClick={() => history.push('/login')}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
