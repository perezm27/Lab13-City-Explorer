import React from 'react';
export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <results>
        <section>
          <h2>Dark Sky API</h2>
        </section>
        <section>
          <h2>Yelp API</h2>
        </section>
        <section>
          <h2>Meetup API</h2>
        </section>
        <section>
          <h2>MovieDB API</h2>
        </section>
        <section>
          <h2>Hiking Project API</h2>
        </section>
      </results>
    );
  }
}
