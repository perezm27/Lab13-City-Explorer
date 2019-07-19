import React from 'react';
export const MoviesApiResults = props => {
  const listItems = props.data.map((v, i) => {
    return (
      <div>
        <section key={i} id="movies-results-template">
          <ul>
            <li>
              <p>
                <span>{v.title}</span> was relased on {v.released_on}. Out of
                {v.total_votes} total votes, {v.title} has an average vote of
                {v.average_votes} and a popularity score of {v.popularity}.
              </p>
              <img src={v.image_url} alt="movie img" />
              <p>{v.overview}</p>
            </li>
          </ul>
        </section>
      </div>
    );
  });

  return (
    <article className="results">
      <h2>Movie Api</h2>
      {listItems}
    </article>
  );
};
