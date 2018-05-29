import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import './index.css';
import App from './components/main';
import getStore from './store';
import registerServiceWorker, { unregister } from './registerServiceWorker';
import { theme } from './utils';

const Routes = (
  <Provider store={getStore()}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

render(Routes, document.getElementById(`root`));

// registerServiceWorker();

// unregister();
