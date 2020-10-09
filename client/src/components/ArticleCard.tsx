import React from 'react';
import { priceFormatter, styled } from '../libs';
import { Article as ArticleType } from '../types';

interface ArticleCardProps {
  article: ArticleType;
}

const Article = styled('article')`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.white};
  padding: 10px;
  transition: box-shadow 0.15s ease-in-out;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
  }
`;

const Image = styled('img')``;

const Title = styled('div')`
  margin: 12px 0;
  height: 35px;
`;

const Price = styled('div')`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.color.orange};
`;

const Button = styled('div')`
  width: 100%;
  margin: 12px 0 5px;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.red};
  border: 1px solid ${({ theme }) => theme.color.red};
  font-weight: 500;
  border-radius: 10px;
  transition: background-color 0.3s ease, color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({ article }) => (
  <Article>
    <Image alt={article.name} src={article.images[0].path} />
    <Title>{article.name}</Title>
    <Price>{priceFormatter.format(article.prices.regular.value / 100)}</Price>
    <Button role="button">Add to cart</Button>
  </Article>
);
