import { styled } from '../libs';

const Page = styled('div')`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 180px auto auto;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
`;

const Header = styled('header')`
  grid-area: header;
  background-color: ${({ theme }) => theme.color.pink};
  border-bottom: 1px solid ${({ theme }) => theme.color.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  figure {
    cursor: pointer;
  }
`;

const Sidebar = styled('aside')`
  grid-area: sidebar;
  background-color: ${({ theme }) => theme.color.lightGray};
  padding: 0;
`;

const Content = styled('main')`
  grid-area: content;
  grid-column: span 2;
  padding-right: 10px;
`;

const Footer = styled('footer')`
  grid-area: footer;
  background-color: ${({ theme }) => theme.color.lightOrange};
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
`;

export { Page, Header, Sidebar, Content, Footer };
