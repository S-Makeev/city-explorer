import React from 'react';
import { Col, Row } from 'react-bootstrap';

class MovieData extends React.Component {
  render() {
    console.log(this.props.movieData)
    return (
      <>
        <section>{this.props.movieData.map(movieInfo => 
        <>
         <section>
          <Row>
            {this.props.movieData.map(movieInfo => 
              <Col md={6}>
                <div>
                  <h3>{movieInfo.title}</h3>
                  <p>{movieInfo.overview}</p>
                </div>
              </Col>
            )}
          </Row>
        </section>
        </>
        )}

        </section>
      </>
    )
  }
}

export default MovieData