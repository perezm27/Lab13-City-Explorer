import React from 'react';
import superagent from 'superagent';
import { SearchForm } from './SearchForm';
import { Header } from './Header';
import './style.css';

import { WeatherResults } from './WeatherResults';
import { YelpSearchResults } from './YelpSearchResults';
import { MoviesApiResults } from './MoviesApiResults';
import { HikingApiResults } from './HikingApiResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backEndUrl: '',
      STATIC_MAP_API_KEY: '',
      googleResults: {},
      apiResults: {
        weathers: [],
        yelp: [],
        hiking: [],
        events: [],
        movies: []
      }
    };
  }

  getApiKey = value => {
    this.setState({ STATIC_MAP_API_KEY: value });
    localStorage.setItem('STATIC_MAP_API_KEY', value);
  };

  getBackendUrl = value => {
    this.setState({ backEndUrl: value });
  };

  getAllData = async value => {
    const googleResults = await superagent
      .get(this.state.backEndUrl + '/location')
      .query({ data: value });
    console.log(googleResults);
    this.setState({ googleResults: googleResults.body });

    const weathersResults = await superagent
      .get(this.state.backEndUrl + '/weather')
      .query({ data: googleResults.body });
    const moviesResults = await superagent
      .get(this.state.backEndUrl + '/movies')
      .query({ data: googleResults.body });
    const trailsResults = await superagent
      .get(this.state.backEndUrl + '/trails')
      .query({ data: googleResults.body });
    const yelpResults = await superagent
      .get(this.state.backEndUrl + '/yelp')
      .query({ data: googleResults.body });

    this.setState({
      apiResults: {
        weathers: weathersResults.body,
        movies: moviesResults.body,
        hiking: trailsResults.body,
        yelp: yelpResults.body
      }
    });
  };

  render() {
    console.log(this.state.apiResults);
    return (
      <div className="App">
        <Header />
        {!this.state.STATIC_MAP_API_KEY && (
          <SearchForm onClick={this.getApiKey} formName="Google Api key" />
        )}
        <SearchForm onClick={this.getBackendUrl} formName="Deployed Url" />
        <SearchForm onClick={this.getAllData} formName="Search Location" />
        <img
          id="mapImg"
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${
            this.state.googleResults.latitude
          }%2c%20${
            this.state.googleResults.longitude
          }&zoom=13&size=600x300&maptype=roadmap&key=${
            this.state.STATIC_MAP_API_KEY
          }`}
          alt="Map"
        />
        <h2>Showing Results For {this.state.googleResults.formatted_query}</h2>
        <WeatherResults data={this.state.apiResults.weathers} />
        <YelpSearchResults data={this.state.apiResults.yelp} />
        <MoviesApiResults data={this.state.apiResults.movies} />
        <HikingApiResults data={this.state.apiResults.hiking} />
      </div>
    );
  }
}
export default App;
