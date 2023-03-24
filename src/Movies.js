import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Movie from './Movie'
/****Comments */
class MovieData extends React.Component {
  render() {
    console.log(this.props.movieData)
    return (
      <>
        <section>{this.props.movieData.map(movie => <Movie movie = {movie} />)}
        </section>
        
      </>
    )
  }
}
export default MovieData