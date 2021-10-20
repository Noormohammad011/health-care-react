import React from 'react'
import { Accordion } from 'react-bootstrap'
import { faq } from '../import'
const Faq = () => {
  return (
    <section className='my-5'>
      <div className='container'>
        <h1 className='text-center text-uppercase heading_title'>
          <span style={{ borderBottom: '4px solid green' }}>
            General Question About Us
          </span>
        </h1>
      </div>

      <div className='container mt-4'>
        <Accordion defaultActiveKey='0' flush>
          {faq.map((x) => (
            <Accordion.Item eventKey={x.id}>
              <Accordion.Header>{x.accordian_header}</Accordion.Header>
              <Accordion.Body>{x.accordian_body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
