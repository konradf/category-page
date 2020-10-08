import styled from '@emotion/styled';

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
  background-color: #ffdcbd;
  border-bottom: 1px solid #5d5d5d;
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
  background-color: #f3f3f3;
  padding: 0;
`;

const Content = styled('main')`
  grid-area: content;
  grid-column: span 2;
  padding-right: 10px;
`;

const Footer = styled('footer')`
  grid-area: footer;
  background-color: #ff813c;
  text-align: center;
  color: #fffefe;
  padding: 10px;
`;

export { Page, Header, Sidebar, Content, Footer };
