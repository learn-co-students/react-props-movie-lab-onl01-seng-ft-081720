import React, { Component } from 'react';
import CardFront from './card-components/CardFront.js';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map( (obj) => {
      return (
        <div>
          <MovieCard title={obj.title} IMDBRating={obj.IMDBRating} genres={obj.genres} poster={obj.poster}/>
        </div>
      )
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

