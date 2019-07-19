import React from 'react';
// import superagent from 'superagent';

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={e => this.setState({ data: e.target.value })} />

        <button onClick={() => this.props.onClick(this.state.data)}>
          {this.props.formName}
        </button>
      </React.Fragment>
    );
  }
}
