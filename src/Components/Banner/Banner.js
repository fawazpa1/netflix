import React, {useEffect} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import './Banner.css'
import { useState } from 'react'

function Banner() {
   
      const [movie, setMove]= useState() 

useEffect(()=> 
{
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((respose)=>{
    
                 //console.log(respose.data.results[0])
                 setMove(respose.data.results[Math.floor(Math.random() * (10 + 1) )]);
                 //console.log(Math.floor(Math.random() * (10 + 1) ))
               
           })
},[])



  return (

    
    <div 
      style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:" "})`}}
      className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title: ""}</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>Mylist</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview:""}</h1>
            <div className="fade_bottom"></div>
       

        </div>

    </div>
  )
}

export default Banner