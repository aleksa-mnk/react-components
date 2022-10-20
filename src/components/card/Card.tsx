import React from 'react';
import CardComponentProps from '../../core/types/types';

class Card extends React.Component<CardComponentProps> {
  render() {
    const { name, birthday, location, image, voice, id } = this.props;

    return (
      <div className="character-card" data-testid={name} data-id={id}>
        <h3 className="character-card__name">{name}</h3>
        <div className="character-card__description">
          <img className="character-card__img" src={image} alt={name} />
          <div className="character-description">
            <p>Birthday: {birthday}</p>
            <p>Location: {location}</p>
            <p>Voiced by: {voice}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
