import React, { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { css } from '@emotion/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout/Layout'
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
              {/* <Route path='/' component={Home} exact />
            <Route path='/about' component={AboutPage} exact />
            <Route path='/contact' component={ContactUsPage} exact />
            <Route path='/faq' component={FaqPage} exact />
            <Route path='*' component={NotFoundPage} exact /> */}
              <Route page='/home' component={Home} exact />
            </Switch>
          </Layout>
        </Router>
      )}
    </>
  )
}

export default App
