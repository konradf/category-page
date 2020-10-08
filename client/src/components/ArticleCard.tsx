import React from 'react';
import { Article } from '../types';
import { priceFormatter } from '../libs';

interface ArticleCardProps {
  article: Article;
}

const ArticleWrapper: React.FunctionComponent = ({ children }) => <div className={'article'}>{children}</div>;

export const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({ article }) => (
  <ArticleWrapper>
    <img alt={article.name} src={article.images[0].path} />
    <div>{article.name}</div>
    <div>{priceFormatter.format(article.prices.regular.value / 100)}</div>
    <section role="button">Add to cart</section>
  </ArticleWrapper>
);
