import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
    return (
      <>
           <Card>
        <Card.Title class='cardInfo'>{this.props.forecast.date}</Card.Title>
      <Card.Body class='cardInfo'>{this.props.forecast.description}</Card.Body>
      </Card>
      
      </>
    );
  }
}

export default WeatherDay;