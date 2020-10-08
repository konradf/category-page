import React from 'react';
import { ChildCategory } from '../types';

interface CategoryListProps {
  categories: ChildCategory[];
  route: string;
  setRoute: (route: string) => void;
}
export const CategoryList: React.FunctionComponent<CategoryListProps> = ({ categories, route, setRoute }) => (
  <>
    <ul>
      {categories.map(({ name, urlPath }) => (
        <li key={name}>
          <a
            href={`/${urlPath}`}
            onClick={(e) => {
              e.preventDefault();
              setRoute(urlPath);
            }}
          >
            {name}
          </a>
          {urlPath === route && ' >>'}
        </li>
      ))}
    </ul>
  </>
);
