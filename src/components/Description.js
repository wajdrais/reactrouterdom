import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function Description({movies}) {
    const {title}=useParams()
    const movie=movies.find(e=>e.title===title)
  return (
    <div>
           <h1>{movie.title}</h1>
           
           <iframe src={movie.trailer} width="600" height="400"/><br/>
         
          <Link to={"/"}>I can navigate back to the home page.</Link>
  
    </div>
  )
}

export default Description