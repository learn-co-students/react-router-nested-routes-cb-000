import React from 'react'
import { Link, Route } from 'react-router-dom';

const Sub = () => {
  return(
    <div>
      <h1>Sub Component</h1>
    </div>
  )
}


const Movie = ({match}) => {
  return(
    <div>
      <h1>Movie Component</h1>
      <Link to={`${match.url}/new_route`}> New Route </Link>
      <Route path={`${match.path}/:subId`} component={Sub} />
    </div>
  )
}

export default Movie
