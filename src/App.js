import React from 'react';
import axios from 'axios';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemonData: [],
      city: [],
    }
  }

  handleCityInput = (event) =>
  {
    this.setState({
      city: event.target.value,
    })
  }
 getCityData = (event) => {
  event.preventDefault();
 }


  handleGetPokemonData = async (event) => {
    event.preventDefault();

    //TODO: Use AXIOS TO MAKE A CALL OUT TO POKEMON API
    let pokemonData = await axios.get('https://pokeapi.co/api/v2/pokemon');

    //TODO: SET DATA INTO STATE
    this.setState({
      pokemonData: pokemonData.data.results,
    })

 
  
}
    //TODO: RENDER THE DATA

  render() {
    return (
      <>
        <h1>API CALLS</h1>
        <form>
          <button type='submit' onClick={this.handleGetPokemonData}>SUBMIT BUTTON</button>
        </form>
        <form onsubmit ={this.getCityData}></form>

        <ul>
          {this.state.pokemonData.map((pokemon, idx) => <li key= {idx}>{pokemon.name}</li>)}
        </ul>
      </>
    )
  }
}
export default App;