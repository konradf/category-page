import React from 'react';
import styled from '@emotion/styled';
import { Category } from '../types';
import { getCategorySummary } from '../libs';

interface CategoryTitleProps {
  category: Category;
  route: string;
}

const Header = styled('h1')`
  margin-top: 8px;
  small {
    font-weight: 400;
  }
`;

export const CategoryTitle: React.FunctionComponent<CategoryTitleProps> = ({ category, route }) => {
  const { name, articleCount } = getCategorySummary(category, route);

  return (
    <>
      <Header>
        {name}
        <small> ({articleCount})</small>
      </Header>
    </>
  );
};
