import React, { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { css } from '@emotion/react'

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
    }, 5000)
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
        <div className='container'>
          <h1>This is starting now</h1>
        </div>
      )}
    </>
  )
}

export default App
