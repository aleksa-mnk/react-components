import Card from '../card/Card';
import { cardData } from '../../core/config/data';
import CardComponentProps from '../../core/types/types';
import React from 'react';

class CardList extends React.Component {
  render() {
    return (
      <ul className="card-list" data-testid="card-list-test">
        {cardData.map((item: CardComponentProps) => (
          <li key={item.id} className="card-list__item">
            <Card {...item} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CardList;
