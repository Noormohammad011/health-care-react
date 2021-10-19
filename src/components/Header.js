import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import { Container, Nav, Navbar } from 'react-bootstrap'
const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false)

  //header change function
  const onChangeHeader = (e) => {
    e.preventDefault()

    if (window.scrollY >= 50) {
      setChangeHeader(true)
    } else {
      setChangeHeader(false)
    }
  }
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -100
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
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
            ? 'bg-danger text-uppercase shadow-lg mb-0'
            : 'bg-dark text-uppercase shadow-sm mb-0'
        }
        style={{ fontFamily: 'Cormorant Garamond' }}
      >
        <Container>
          <Navbar.Brand href='#home'>
            <i className='fas fa-clinic-medical fa-2x'></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='ms-auto my-2 my-lg-0'>
              <Nav.Link
                as={HashLink}
                smooth
                to='/home#home'
                scroll={(el) => scrollWithOffset(el)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                smooth
                as={HashLink}
                to='/home#about'
                scroll={(el) => scrollWithOffset(el)}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to='/home#services'
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Services
              </Nav.Link>

              <Nav.Link
                as={HashLink}
                to='/home#gallery'
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to='/home#blog'
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to='/home#contact'
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to='/home#login'
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
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
