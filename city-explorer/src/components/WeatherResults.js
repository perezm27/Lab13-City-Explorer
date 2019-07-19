import React from 'react';

export const WeatherResults = props => {
  const listItems = props.data.map((v, i) => {
    return (
      <div>
        <section key={i} id="weather-results-template">
          <ul>
            <li>
              The forecast for {v.time} is: {v.forecast}
            </li>
          </ul>
        </section>
      </div>
    );
  });

  return (
    <article className="results">
      <h2>Dark Sky API</h2>
      {listItems}
    </article>
  );
};
