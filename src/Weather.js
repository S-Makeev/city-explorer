import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render(){
    
    return(
      <>
        <h3>Daily Weather</h3>
           
        {this.props.weatherData.map((forecast, indx) => (
          <WeatherDay key={indx} forecast={forecast} />
        ))}
      </>
    )
  }
}


export default Weather;