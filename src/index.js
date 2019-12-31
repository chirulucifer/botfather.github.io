/* eslint-disable no-empty-pattern */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './config/redux';
import Home, { homeReducer } from './pages/home';
import theme from './config/theme';
import GlobalStyle from './config/theme/global.styles';


const Application = () => (
  <Provider store={store({ home: homeReducer })}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
