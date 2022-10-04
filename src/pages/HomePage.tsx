import React from 'react';
import SearchBar from '../components/search-bar/search-bar';
import CardList from '../components/card-list/card-list';
import Header from '../components/header/Header';

interface SearchBarState {
  searchString: string;
}

export default class HomePage extends React.Component<unknown, SearchBarState> {
  render() {
    return (
      <>
        <Header />
        <main className="main home">
          <div data-testid="homepage" className="container">
            <SearchBar />
            <CardList />
          </div>
        </main>
      </>
    );
  }
}
