import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material/styles";
import primaryTheme from'./themes/primaryTheme';
import AppContextProvider from './context/AppContext';

import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme ={primaryTheme}>
      <BookContextProvider>
      <AppContextProvider>
        <CssBaseline/>
        <App />
      </AppContextProvider>
      </BookContextProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
