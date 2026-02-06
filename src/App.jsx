import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PackageDetails from './pages/PackageDetails';
import Dashboard from './pages/Dashboard';
import { Box, Typography } from '@mui/material';

// Custom MUI Theme to match the "SmartChama" aesthetic
const theme = createTheme({
  palette: {
    primary: {
      main: '#0ea5e9',
      contrastText: '#fff',
    },
    background: {
      default: '#f8fafc',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 800,
    },
    h4: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '8px 20px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/package/:id" element={<PackageDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Box>
            <Box component="footer" sx={{ py: 6, textAlign: 'center', bgcolor: 'white', borderTop: '1px solid #e2e8f0' }}>
              <Typography variant="body2" color="text.secondary">
                © 2024 SmartChama Platform. All rights reserved.
              </Typography>
            </Box>
          </Box>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
