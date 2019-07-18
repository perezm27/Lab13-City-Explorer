import React from 'react';
// import superagent from 'superagent';

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationValue: ' '
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange = event => {
    this.setState({ locationValue: event.target.value });
  };

  handleClick = e => {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
    // superagent
    //   .get(`https://city-explorer-backend.herokuapp.com/`)
    //   .then(response => {
    //     console.log(response.body.results);
    //     this.setState({ results: response.body.results });
    //   });
  };

  render() {
    return (
      <search>
        <form onSubmit={this.handleClick}>
          <label>Search for a location</label>
          <input value={this.state.value} onChange={this.handleChange} />
          <button>Explore!</button>
        </form>
      </search>
    );
  }
}
