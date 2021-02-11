import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({ movies }) => {
  const renderMovies = movies.map(movie =>
    <span key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link>  </span>
  )
  return (
    <div>
      {renderMovies}
    </div>
  )
}
export default MoviesList