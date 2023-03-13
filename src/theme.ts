import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: '#4CAF50',
      contrastText: '#ffffff',
    },
  },
});
