import { styled } from '../libs';

export const Search = styled('input')`
  height: 50px;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  outline-color: ${({ theme }) => theme.color.gray};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding-left: 15px;
  transition: box-shadow 0.2s ease, outline-color 0.2s ease;
  &:focus {
    border-color: ${({ theme }) => theme.color.orange};
    outline-color: ${({ theme }) => theme.color.orange};
    box-shadow: ${({ theme }) => theme.color.orange} 5px 5px 10px -5px;
  }
  @media (max-width: 620px) {
    width: 200px;
  }
`;
