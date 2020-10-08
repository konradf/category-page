import React from 'react';
import * as ReactDOM from 'react-dom';
import { CategoryPage } from './CategoryPage';
import { MAIN_CATEGORY } from './config';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CategoryPage id={MAIN_CATEGORY} />
  </React.StrictMode>,
  document.getElementById('root')
);
