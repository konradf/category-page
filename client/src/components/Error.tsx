import React from 'react';
import { styled } from '../libs';

const Box = styled('div')``;

export const Error: React.FunctionComponent = () => (
  <Box>
    <h4>We are terribly sorry.</h4> It seems that there is a network problem. Please try again later.
  </Box>
);
