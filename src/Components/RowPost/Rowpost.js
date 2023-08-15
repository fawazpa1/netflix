import React,{useEffect,useState}from 'react'
import axios from '../../axios'
import './RowPost.css'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import YouTube from 'react-youtube'

function Rowpost(props) {
const[movies,setMovies]=useState([])
const [urlId,setUrlId]=useState('')
useEffect(()=>{
  axios.get(props.url).then(response=>{
    console.log(response.dada)
    setMovies(response.data.results)
  } ).catch(err=>{
    alert('Network error')
  })
},[])



const opts = 
{
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};


const movietrailer=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length!==0)
    {
       setUrlId(response.data.results[0])
    }
    else 
    {
        console.log("Array empty")
    }
 

  })
}




return (
  <div className='row'>
      <h2>{props.title}</h2>
          <div className='posters'>
            {movies.map((obj)=>   

               <img onClick={()=>movietrailer(obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster"/>
            )}
           
          </div>
         {urlId && <YouTube  opts={opts} videoId={urlId.key} />} 
  </div>
)
}

export default Rowpost