import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
export default function Login() {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  })
  const { signInUser, signInWithGoogle } = useAuth()

  // handle change
  const handleChange = (e) => {
    const { value, name } = e.target
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signInUser(userInput.email, userInput.password)
  }

  //form inputs
  const Inputs = [
    {
      id: 1,
      type: 'email',
      placeholder: 'Email',
      value: `${userInput.email}`,
      name: 'email',
    },
    {
      id: 2,
      type: 'password',
      placeholder: 'Password',
      value: `${userInput.password}`,
      name: 'password',
    },
  ]
  return (
    <div className='mt-5'>
      <FormContainer>
        <h1 className='text-center'>Sign in</h1>

        <Form onSubmit={handleSubmit}>
          {Inputs.map((input) => (
            <Form.Group controlId={input.name} key={input.id}>
              <Form.Label>{input.name}</Form.Label>
              <Form.Control
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                name={input.name}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          ))}
          <Button type='submit' variant='primary' className='mt-3 text-center'>
            Login
          </Button>
          <hr />
          <span>Or</span>
          <br />
          <Button variant='outline-success' onClick={signInWithGoogle}>
            <i className='fab fa-google'>
              {' '}
              <span>oogle</span>
            </i>
          </Button>{' '}
        </Form>

        <Row className='py-3'>
          <Col>
            Have an Account? <Link to='/signup'>Sign Up</Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  )
}
