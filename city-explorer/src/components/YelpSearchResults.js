import React from 'react';

export const YelpSearchResults = props => {
  const listItems = props.data.map((v, i) => {
    return (
      <div>
        <section key={i} id="yelp-results-template">
          <ul>
            <li>
              <a href={v.url}>{v.name}</a>
              <p>
                The average rating is {v.rating} out of 5 and the average cost
                is
                {v.price} out of 4
              </p>
              <img src={v.image_url} alt="yelp img" />
            </li>
          </ul>
        </section>
      </div>
    );
  });

  return (
    <article className="results">
      <h2>Yelp Api</h2>
      {listItems}
    </article>
  );
};
