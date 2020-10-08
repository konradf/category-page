import React from 'react';
import { Article } from '../types';
import { ArticleCard } from './ArticleCard';

import './ArticleList.css';

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList: React.FunctionComponent<ArticleListProps> = ({ articles }) => (
  <div className={'articles'}>
    {articles.map((article) => (
      <ArticleCard key={`${article.name}|${article.variantName}`} article={article} />
    ))}
  </div>
);
