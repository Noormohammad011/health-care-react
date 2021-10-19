import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
const Blog = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      const { data } = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0f2ecf7650b243ae99472c2a08cffbaf'
      )

      setNews(data.articles)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <section id='blog' className='my-5'>
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
            news
              ?.map((x, index) => (
                <div className='col'>
                  <div className='card my-2 h-100' key={index}>
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
