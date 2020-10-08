import React from 'react';
import { Category } from '../types';
import { getCategorySummary } from '../libs';

interface CategoryTitleProps {
  category: Category;
  route: string;
}

export const CategoryTitle: React.FunctionComponent<CategoryTitleProps> = ({ category, route }) => {
  const { name, articleCount } = getCategorySummary(category, route);

  return (
    <>
      <h1>
        {name}
        <small>({articleCount})</small>
      </h1>
    </>
  );
};
