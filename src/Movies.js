import React from 'react';


class MovieData extends React.Component {
  render() {
    console.log(this.props.movieData)
    return (
      <>
        <section>{this.props.movieData.map(movieInfo => 
        <>
        <h3>{movieInfo.title}</h3>
        <p>{movieInfo.overview}</p>
        </>
        )}

        </section>
      </>
    )
  }
}

export default MovieData