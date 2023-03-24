import React from 'react';

class Movie extends React.Component {
render(){
  return (
<>
<h3>{this.props.movie.title}</h3>
<p>{this.props.movie.overview}</p>
</>  
 )
  }
}
export default Movie;