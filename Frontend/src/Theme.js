import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#99BC85' },
    secondary: { main: '#E4EFE7' },
    background: { default: '#FAF1E6', paper: '#FDFAF6' },
    text: { primary: '#333333', secondary: '#99BC85' },
  },
  typography: {
    fontFamily: 'Poppins, Inter, sans-serif',
    h1: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.2rem', fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s ease',
          '&:hover': { transform: 'scale(1.05)' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export default theme;
