import Card from '../card/Card';
import { cardData } from '../../config/data';
import React from 'react';

class CardList extends React.Component {
  render() {
    return (
      <ul className="card-list" data-testid="card-list-test">
        {cardData.map((item) => (
          <li key={item.id} className="card-list__item">
            <Card {...item} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CardList;
