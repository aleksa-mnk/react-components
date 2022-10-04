import React from 'react';
import Header from '../components/header/Header';

export default class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <div data-testid="about" className="container">
            <h1>About Page</h1>
          </div>
        </main>
      </>
    );
  }
}
