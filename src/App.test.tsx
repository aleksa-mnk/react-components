import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

test('Router', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const homelink = screen.getByTestId('Home-link');
  const aboutlink = screen.getByTestId('About-link');

  userEvent.click(homelink);
  expect(screen.getByTestId('homepage')).toBeInTheDocument();

  userEvent.click(aboutlink);
  expect(screen.getByTestId('about')).toBeInTheDocument();
});

test('Not Found page', () => {
  render(
    <MemoryRouter initialEntries={['/404']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId('not-found')).toBeInTheDocument();
});
