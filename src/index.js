import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#22FFEE', //neon blue
    },
    secondary: {
      main: '#1C1E2D', //dark blue
    },
    error: {
      main: '#C13B2C',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      'monospace',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

render(
<MuiThemeProvider theme={theme}>
  <App />
</MuiThemeProvider>,
document.getElementById('root'));