import React from 'react'
import Cardmovie from './Cardmovie'


function Cards({movies}) {
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"20px",flexWrap:"wrap"}} >
{
    movies.map(e=>
        <Cardmovie movie={e}/>
    )
}
    </div>
  )
}

export default Cards