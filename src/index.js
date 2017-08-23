import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import './index.css';
import { theme } from './utils';
import App from './components/main';
import registerServiceWorker from './registerServiceWorker';
import getStore from './store';

const Routes = (
  <Provider store={getStore()}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

render(Routes, document.getElementById('root'));
registerServiceWorker();
