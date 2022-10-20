import React from 'react';
import { Link } from 'react-router-dom';
import { navData } from '../../../core/config/route';

class Header extends React.Component {
  render() {
    const curPath = window.location.pathname;
    return (
      <header className="header" data-testid="header-test">
        {navData.map(({ title, path }) => (
          <div key={path} className="header__item">
            <Link
              className={`header__link ${curPath === path ? 'header__link--active' : ''}`}
              data-testid={`${title}-link`}
              to={path}
            >
              {title}
            </Link>
          </div>
        ))}
        <div className="header__logo"></div>
      </header>
    );
  }
}

export default Header;
