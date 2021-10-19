import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { services } from '../import'
const ServicesDetail = ({ match }) => {
  const filtered = services?.find((x) => x.id == match.params.id)

  return (
    <div className='container'>
      <Link className='btn btn-outline-dark my-5' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={filtered.image} alt={filtered.name} fluid />
        </Col>
        <Col md={6}>
          <h1>{filtered.title}</h1>
          <hr />
          <p>{filtered.description}</p>
        </Col>
      </Row>
    </div>
  )
}

export default ServicesDetail
