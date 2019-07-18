import React from 'react';
import { Header } from './Header';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';
import { Map } from './Map';

function App() {
  return (
    <React.Fragment>
      <Header />
      <SearchForm />
      <Map />
      <SearchResults />
    </React.Fragment>
  );
}

export default App;
