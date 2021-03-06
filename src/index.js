import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//theme
import theme from './theme/theme'
import { ThemeProvider } from '@material-ui/core'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)