import React from 'react'
import "../styles/Anime.css"

import axios from 'axios'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const Anime = () => {

  const [content, setContent] = useState([])


  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2bb6d434c712ef7b54c243449e4f4455&with_genres=16`);
    setContent(data.results)
  }

  const imageSizeLink = "https://image.tmdb.org/t/p/w300"

  useEffect(() => {
    fetchTrending();

  }, [])

  
  return (<div className='action-parent'>

    {content.map((item =>{

      return(
        <Link to={`/${item.id}`}  key={item.id}> 

        <div key={item.id}>
        <div className='action-indivitual' >

        <img src={`${imageSizeLink}/${item.poster_path}`} className="action-img" />
        <p className='action-title'>{item.title}</p>

        </div>

        </div>
        </Link>
      )
    }))}


  </div>
  )



}

export default Anime