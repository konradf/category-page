import styled from '@emotion/styled';

export const Search = styled('input')`
  height: 50px;
  width: 300px;
  border: 1px solid #d6d4d4;
  outline-color: #d6d4d4;
  border-radius: 4px;
  font-size: 18px;
  padding-left: 15px;
  transition: box-shadow 0.2s ease, outline-color 0.2s ease;
  &:focus {
    border-color: #e65100;
    outline-color: #e65100;
    box-shadow: #e65100 5px 5px 10px -5px;
  }
  @media (max-width: 620px) {
    width: 200px;
  }
`;
