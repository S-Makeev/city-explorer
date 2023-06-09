import React from 'react';
import axios from 'axios';
import Weather from './Weather';
import MovieData from './Movies.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      errorMessage: '',
      weatherData: [],
      movieData: []
    }
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);
      let lat = cityDataFromAxios.data[0].lat;
      let lon = cityDataFromAxios.data[0].lon;


      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false
      });

      // TODO: CALL WEATHER HANDLER
      this.handleGetWeather(lat, lon);


    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }


  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleGetMovie = async () => {
    try {    
      let movieUrl = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`;
      let axiosUrl = await axios.get(movieUrl);

      this.setState ({
        movieData: axiosUrl.data
      });

    } catch (error) {
    }
  }

  handleGetWeather = async (lat, lon, city) => {
    try {
      console.log('handlegetWeather was called');
      // TODO: Call my server and pass in the lat, lon, and city name
      let url = `${process.env.REACT_APP_SERVER}/weather?city=${this.state.city}&lat=${lat}&lon=${lon}`;

      let weatherDataFromAxios = await axios.get(url);

      let weatherArr = weatherDataFromAxios.data.map((forecast, key) => {
        return forecast;
      });

      this.setState({
        weatherData: weatherArr,
        error: false
      })

      this.handleGetMovie();
    } catch (error) {
      console.log(error.message)
    }
  }

 // TODO: Create a seperate Component pass that down as props
  render() {
    return (
      <>
        <h1>API CALLS</h1>
        <form onSubmit={this.getCityData}>
          <label > Enter in a City:
            <input type="text" onChange={this.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>

        {/* TERNARY - WTF  */}
        {
          this.state.error
            ? <p>{this.state.errorMessage}</p>
            : Object.keys(this.state.cityData).length > 0 &&
            <>
              <p>{this.state.cityData.display_name}</p>
              <p>Lat: {this.state.cityData.lat}</p>
              <p>Lon: {this.state.cityData.lon}</p>

              <Weather weatherData={this.state.weatherData} />
              <MovieData movieData={this.state.movieData}/>
            </>
        }
      </>
    )
  }
}

export default App;







