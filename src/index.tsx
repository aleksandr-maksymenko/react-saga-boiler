import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootAction } from 'modules/rootAction';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { theme, globalStyles } from 'theme';
import { PageRoot } from './pages';
import { createReduxStore } from './store';

const store = createReduxStore();
const rootEl = document.getElementById('root');

globalStyles();

type x = RootAction;

function render(Component: React.FunctionComponent): void {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <StoreContext.Provider value={store}>
        <Router>
          <Normalize />
          <Component />
        </Router>
      </StoreContext.Provider>
    </ThemeProvider>,
    rootEl,
  );
}

render(PageRoot);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./pages', () => {
      render(PageRoot);
    });
  }
}
