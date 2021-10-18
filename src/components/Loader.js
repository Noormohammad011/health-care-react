import React, { useEffect, useState } from 'react'
import DotLoader from 'react-spinners/DotLoader'

import { css } from '@emotion/react'
const Loader = () => {
  const [loading, setLoading] = useState(false)
  const color = '#051F19'
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
    }, 8000)
  }, [])
  return (
    <div className='d-flex justify-content-center align-items-center'>
      {loading && (
        <DotLoader color={color} css={override} size={100} loading={loading} />
      )}
    </div>
  )
}

export default Loader
