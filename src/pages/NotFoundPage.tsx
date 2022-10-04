import React from 'react';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found" data-testid="not-found">
        <img
          className="not-found__img"
          src="https://i.giphy.com/media/VwoJkTfZAUBSU/giphy.webp"
          alt="404 Not Found"
        />
      </div>
    );
  }
}
