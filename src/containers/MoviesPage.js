// ./src/containers/MoviesPage.js
import React from 'react';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';

//Add for nested routes
import { Route } from 'react-router-dom';
import MovieShow from './MoviesShow';

const MoviesPage = ({ match, movies }) =>
  <div>
    <MoviesList movies={movies} />
    <Route path={`${match.url}/:movieId`} component={MovieShow}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
