import React from 'react';
export class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <map>
        <img
          src="https://staticmapmaker.com/img/google@2x.png"
          alt="Google maps placeholder"
        />
      </map>
    );
  }
}

{
  /* <ul>
          {this.state.results.map((character, i) => (
            <li key={character.url}>
              <a href={character.url}>{character.name}</a>
            </li>
          ))}
        </ul> */
}
