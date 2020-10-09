import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { CategoryPage } from '../CategoryPage';

jest.mock('../libs/api', () => ({
  fetchCategory: jest.fn().mockResolvedValue({
    childrenCategories: [],
    categoryArticles: [],
  }),
}));

describe('CategoryPage', function () {
  it('renders the home24 logo', async () => {
    await act(async () => {
      render(<CategoryPage id="1" />);
    });
    const logo = screen.getByAltText(/Home 24/i);

    expect(logo).toBeInTheDocument();
  });

  it('renders the search input', async () => {
    await act(async () => {
      render(<CategoryPage id="1" />);
    });
    const input = screen.getByPlaceholderText(/Search.../i);

    expect(input).toBeInTheDocument();
  });

  it('renders the Kategorien label', async () => {
    await act(async () => {
      render(<CategoryPage id="1" />);
    });
    const categoryLabel = screen.getByText(/kategorien/i);

    expect(categoryLabel).toBeInTheDocument();
  });

  it('renders the footer content', async () => {
    await act(async () => {
      render(<CategoryPage id="1" />);
    });
    const footerContent = screen.getByText(/Alle Preise sind in Euro/i);

    expect(footerContent).toBeInTheDocument();
  });
});
