import React from 'react';
import { styled } from '../libs';
import { ChildCategory } from '../types';

const Title = styled('h3')`
  padding: 0 20px;
`;

const Divider = styled('hr')`
  border-top: 1px solid ${({ theme }) => theme.color.gray};
  margin-left: 20px;
  width: 130px;
`;

const List = styled('ul')`
  list-style-type: none;
  padding: 0;
`;

interface ListItemProps {
  active?: boolean;
}

const ListItem = styled('li')<ListItemProps>`
  margin: 0;
  padding: 10px 20px;
  display: block;
  cursor: pointer;
  a {
    font-weight: bold;
    text-decoration: none;
    color: ${({ active, theme }) => (active ? theme.color.orange : theme.color.dark)};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.orange};
    a {
      color: ${({ theme }) => theme.color.white};
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
            <a
              href={`/${urlPath}`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {name}
            </a>
          </ListItem>
        ))}
      </List>
    </nav>
  </>
);
