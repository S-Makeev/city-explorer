import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);

      console.log(cityDataFromAxios.data[0])

      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false
      });

    } catch (error) {

      this.setState({
        error: true,
        errorMessage: error.message
      })
    }

  }

  // *** MAP PORTION OF YOUR LAB IMG SRC POINTS TO THIS URL: 
  // *** https://maps.locationiq.com/v3/staticmap?key=<YOUR API KEY>&center=<CITY'S LAT>,<CITY'S LON>&zoom=13

  render() {
    return (
      <>
        <h1>API CALLS</h1>



        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>

            <Card.Title>{
              this.state.error
                ? <p>{this.state.errorMessage}</p>
                : <p>{this.state.cityData.display_name}</p>
            }
            </Card.Title>
            <Card.Text>
              <form onSubmit={this.getCityData}>
                <label > Enter in a City:
                  <input type="text" onChange={this.handleCityInput} />
                </label>

                <button type="submit">Explore!</button>
              </form>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default App;