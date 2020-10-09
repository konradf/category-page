import React from 'react';
import { ArticleCard } from './ArticleCard';
import { styled } from '../libs';
import { Article } from '../types';

const Articles = styled('section')`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList: React.FunctionComponent<ArticleListProps> = ({ articles }) => (
  <Articles>
    {articles.map((article) => (
      <ArticleCard key={`${article.name}|${article.variantName}`} article={article} />
    ))}
  </Articles>
);
