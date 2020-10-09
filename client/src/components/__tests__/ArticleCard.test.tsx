import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArticleCard } from '../ArticleCard';
import { Article } from '../../types';
import { ThemedComponent } from '../../libs/testUtils';
import { priceFormatter } from '../../libs';

const articleMock: Article = {
  images: [{ path: 'image-url' }],
  name: 'TestArticle',
  prices: { currency: '$', regular: { value: 150 } },
  variantName: 'pretty',
};

const ArticleCardComponent = (
  <ThemedComponent>
    <ArticleCard article={articleMock} />
  </ThemedComponent>
);

describe('ArticleCard', function () {
  it('renders article image', () => {
    render(ArticleCardComponent);
    const image = screen.getByAltText(articleMock.name);

    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toEqual(articleMock.images[0].path);
  });

  it('renders article title', () => {
    render(ArticleCardComponent);

    expect(screen.getByText(articleMock.name)).toBeInTheDocument();
  });

  it('renders article price', () => {
    render(ArticleCardComponent);
    const expectedPrice = priceFormatter.format(articleMock.prices.regular.value / 100);

    expect(screen.getByText(expectedPrice)).toBeInTheDocument();
  });

  it('renders Add to card button', () => {
    render(ArticleCardComponent);

    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });
});
