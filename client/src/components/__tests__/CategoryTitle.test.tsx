import React from 'react';
import { render, screen } from '@testing-library/react';
import { CategoryTitle } from '../CategoryTitle';
import { ThemedComponent } from '../../libs/testUtils';
import { Category } from '../../types';

jest.mock('../../libs/categoryHelpers', () => ({
  getCategorySummary: () => ({ name: 'categoryName', articleCount: 5 }),
}));

const fakeCategory = ({} as unknown) as Category;

const ArticleCardComponent = (
  <ThemedComponent>
    <CategoryTitle category={fakeCategory} route="/test" />
  </ThemedComponent>
);

describe('CategoryTitle', function () {
  it('renders category name', () => {
    render(ArticleCardComponent);

    expect(screen.getByText('categoryName')).toBeInTheDocument();
  });

  it('renders articles count', () => {
    render(ArticleCardComponent);

    expect(screen.getByText(/5/)).toBeInTheDocument();
  });
});
