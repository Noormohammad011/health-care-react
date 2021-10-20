import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import {articles} from '../import'
const Blog = () => {
  
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  

  return (
    <section id='blog' className='my-5 heading_title'>
      <div className='container'>
        <h1 className='text-center text-uppercase'>
          <span style={{ borderBottom: '4px solid green' }}>Blog</span>
        </h1>
      </div>
      <div className='container my-5'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {isLoading ? (
            <Loader />
          ) : (
            articles
              ?.map((x) => (
                <div className='col'>
                  <div className='card my-2 h-100' key={x.id}>
                    <img
                      src={x.urlToImage}
                      className='card-img-top'
                      alt={x.author}
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{x.author}</h5>
                      <p className='card-text'>{x.title}</p>
                    </div>
                    <div className='card-footer'>
                      <small className='text-muted'>{x.publishedAt}</small>
                    </div>
                  </div>
                </div>
              ))
              .slice(0, 7)
          )}
        </div>
      </div>
    </section>
  )
}

export default Blog
