import { createTheme } from "@mui/material/styles";


export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#5fbf8a',
      light: 'rgba(203,34,62,0.65)',
      dark: '#1d641d',
      contrastText: 'rgba(82,76,212,0.87)',
    },
    secondary: {
      main: '#989215',
      light: '#e8e8ba',
      dark: '#6a5b0e',
      contrastText: '#c35353',
    },
    background: {
      default: '#dc7979',
      paper: '#acc2e2',
    },
    error: {
      main: 'rgba(255,17,0,0.9)',
    },
    info: {
      main: '#cb3145',
    },
    success: {
      main: '#00ff08',
    },
    divider: 'rgba(163,255,173,0.58)',
  },
};


const theme=createTheme(themeOptions);
export default theme