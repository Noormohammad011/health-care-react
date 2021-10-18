import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {
  
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      const {data} = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0f2ecf7650b243ae99472c2a08cffbaf'
      )

      setNews(data.articles)
      setIsLoading(false)
    }

    fetchData()
  }, [])
  
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  )
}

export default Blog
