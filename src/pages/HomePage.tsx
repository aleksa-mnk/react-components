import React from 'react';
import SearchBar from '../components/search-bar/search-bar';
import CardList from '../components/card-list/card-list';

interface SearchBarState {
  searchString: string;
}

export default class HomePage extends React.Component<unknown, SearchBarState> {
  render() {
    return (
      <div data-testid="homepage" className="container">
        <SearchBar />
        <CardList />
      </div>
    );
  }
}
