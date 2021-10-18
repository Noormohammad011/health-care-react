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
          <Layout>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/home' component={Home} exact />
              <Route path='/about' component={AboutUs} exact />
              <Route path='/blog' component={Blog} exact />
              <Route path='/gallery' component={Gallery} exact />
              <Route path='/contact' component={Contact} exact />
              <Route path='*' component={NotFoundPage} exact />
            </Switch>
          </Layout>
        </Router>
      )}
    </>
  )
}

export default App
