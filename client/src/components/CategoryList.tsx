import React from 'react';
import styled from '@emotion/styled/macro';
import { ChildCategory } from '../types';

const Title = styled('h3')`
  padding: 0 20px;
`;

const Divider = styled('hr')`
  border-top: 1px solid #dcd9d9;
  margin-left: 20px;
  width: 130px;
`;

const List = styled('ul')`
  list-style-type: none;
  padding: 0;
`;

const ListItemLink = styled('a')`
  font-weight: bold;
  text-decoration: none;
`;

interface ListItemProps {
  active?: boolean;
}

const ListItem = styled('li')<ListItemProps>`
  margin: 0;
  padding: 10px 20px;
  display: block;
  cursor: pointer;
  ${ListItemLink} {
    color: ${({ active }) => (active ? '#e65100' : '#333')};
  }
  &:hover {
    background-color: #e65100;
    ${ListItemLink} {
      color: #fff;
    }
  }
`;

interface CategoryListProps {
  categories?: ChildCategory[];
  route: string;
  setRoute: (route: string) => void;
}

export const CategoryList: React.FunctionComponent<CategoryListProps> = ({ categories, route, setRoute }) => (
  <>
    <Title>Kategorien</Title>
    <Divider />

    {!categories && 'Loading ...'}

    <nav>
      <List>
        {categories?.map(({ name, urlPath }) => (
          <ListItem
            key={name}
            onClick={() => {
              setRoute(urlPath);
            }}
            active={urlPath === route}
          >
            <ListItemLink
              href={`/${urlPath}`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {name}
            </ListItemLink>
          </ListItem>
        ))}
      </List>
    </nav>
  </>
);
