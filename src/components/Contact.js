import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState(null)

  function submitHandler(e) {
    e.preventDefault()
    console.log(name, email, address, message)
  }

  return (
    <section id='contact' className='my-5 heading_title'>
      <div className='container'>
        <h1 className='text-center text-uppercase'>
          <span style={{ borderBottom: '4px solid green' }}>Contact</span>
        </h1>
      </div>
      <div className='container my-5'>
        <div className='d-flex flex-column align-items-center'>
          <form className='row g-3' onSubmit={submitHandler}>
            <div className='col-md-6'>
              <label htmlFor='inputEmail4' className='form-label'>
                Email
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='form-control'
                id='inputEmail4'
              />
            </div>
            <div className='col-md-6'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='form-control'
                id='name'
              />
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className='col-12'>
              <div className='d-grid '>
                <Link to='/' className='btn btn-primary' type='button'>
                  Submit
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
