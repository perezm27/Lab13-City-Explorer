import React from 'react';

export const HikingApiResults = props => {
  const listItems = props.data.map((v, i) => {
    return (
      <div>
        <section key={i} id="trails-results-template">
          <ul>
            <li>
              <p>
                Hike Name: <a href={v.trail_url}>{v.name}</a>, Location:
                {v.location}, Distance: {v.length} miles
              </p>
              <p>
                On {v.condition_date} at {v.condition_time}, trail conditions
                were reported as: {v.conditions}
              </p>
              <p>
                This trail has a rating of {v.stars} stars (out of{v.star_votes}
                votes)
              </p>
              <p>{v.summary}</p>
            </li>
          </ul>
        </section>
      </div>
    );
  });

  return (
    <article className="results">
      <h2>Trails Api</h2>
      {listItems}
    </article>
  );
};
