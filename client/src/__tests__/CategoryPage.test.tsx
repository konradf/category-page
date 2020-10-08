import React from 'react';
import { render } from '@testing-library/react';
import { CategoryPage } from '../CategoryPage';

it('renders the home24 logo', () => {
  const { getByAltText } = render(<CategoryPage id="1" />);
  const linkElement = getByAltText(/Home 24/i);

  expect(linkElement).toBeInTheDocument();
});

it('renders the Kategorien label', () => {
  const { getByText } = render(<CategoryPage id="1" />);
  const linkElement = getByText(/kategorien/i);

  expect(linkElement).toBeInTheDocument();
});
