import { keyframes } from '@emotion/core';
import { styled } from '../libs';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled('div')`
  margin: 10px;
  width: 60px;
  height: 60px;
  border: 5px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.color.orange};
  animation: ${spin} 1s ease-in-out infinite;
`;
