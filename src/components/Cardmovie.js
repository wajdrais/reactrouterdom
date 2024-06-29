import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cardmovie({movie}) {
  return (
    <div>
       <Link to={`/Cardmovie/${movie.title}`}>
        <Card style={{ width: '18rem' }}>
          
      <Card.Img variant="top" src={movie.image} style={{height:"400px"}} />
      
      <Card.Body>
      
      <Card.Title>{movie.title}</Card.Title>
      
        <Card.Text>{movie.description} </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default Cardmovie