import React, { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { css } from '@emotion/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

import Layout from './Layout/Layout'
import AboutUs from './components/AboutUs'
import NotFoundPage from './pages/NotFoundPage'
import Blog from './components/Blog'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Services from './components/Services'
import ServicesDetail from './pages/ServicesDetail'
import AuthProvider from './context/AuthProvider'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import PrivateRoute from './ProtectedRoute/PrivateRoute'


function App() {
  //Preloader Start
  const [loading, setLoading] = useState(false)
  const color = '#21D2AF'
  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -39px;
    margin-top: -39px;
  `
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  //End of Preloader

  return (
    <>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center'>
          <HashLoader
            color={color}
            css={override}
            size={100}
            loading={loading}
          />
        </div>
      ) : (
        <Router>
          <AuthProvider>
            <Layout>
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/home' component={Home} exact />
                <Route path='/services' component={Services} exact />
                <PrivateRoute
                  path='/services/:id'
                  component={ServicesDetail}
                  exact
                />
                <Route path='/about' component={AboutUs} exact />
                <Route path='/blog' component={Blog} exact />
                <Route path='/gallery' component={Gallery} exact />
                <Route path='/contact' component={Contact} exact />
                <Route path='/login' component={Login} exact />
                <Route path='/signup' component={SignUp} exact />
                <Route path='*' component={NotFoundPage} exact />
              </Switch>
            </Layout>
          </AuthProvider>
        </Router>
      )}
    </>
  )
}

export default App
