import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import { Container, Nav, Navbar } from 'react-bootstrap'
const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false)

  //header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true)
    } else {
      setChangeHeader(false)
    }
  }

  //change header by scrolling
  window.addEventListener('scroll', onChangeHeader)
  return (
    <>
      <Navbar
        sticky='top'
        expand='lg'
        variant='dark'
        className={
          changeHeader
            ? 'bg-danger text-uppercase shadow-lg'
            : 'bg-dark text-uppercase shadow-sm'
        }
        style={{ fontFamily: 'Cormorant Garamond' }}
      >
        <Container>
          <Navbar.Brand href='#home'>
            <i className='fas fa-clinic-medical fa-2x'></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ms-auto my-2 my-lg-0'
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link as={HashLink} to='/home#home'>
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to='/home#about'>
                About
              </Nav.Link>
              <Nav.Link as={HashLink} to='/home#services'>
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to='/home#experts'>
                Experts
              </Nav.Link>
              <Nav.Link as={HashLink} to='/home#gallery'>
                Gallery
              </Nav.Link>
              <Nav.Link as={HashLink} to='/home#doctors'>
                Doctors
              </Nav.Link>
              <Nav.Link as={HashLink} to='/home#blog'>
                Blog
              </Nav.Link>
              <Nav.Link as={HashLink} to='/home#login'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
