import React, { useEffect, useState } from 'react'

import axios from '../../axios'
import './Banner.css'
function Banner () {
  const [Movie,setMovie] = useState()   
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=$API_KEY&with_genres=28').then((response)=>{
      
   
      setMovie(response.data.results[0])
    })

  },[])
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='tittle'>{Movie ? Movie.tittle:""}</h1>
            <div className='banner_button'>
             
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'>Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.</h1>
    </div>
    <div className="fade_bottom"></div>
  </div>
  )
}

export default Banner
