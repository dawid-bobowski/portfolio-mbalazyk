import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { store } from './app/store.ts';
import App from './App.tsx';
import './index.css';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs400: true;
    xs500: true;
    sm750: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xs400: 400,
      xs500: 500,
      sm: 600,
      sm750: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
