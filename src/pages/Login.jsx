import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box, Divider } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login
        login({ email, name: email.split('@')[0] });
        navigate(from, { replace: true });
    };

    return (
        <Container maxWidth="xs" sx={{ py: 12 }}>
            <Paper sx={{ p: 5, borderRadius: 5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, textAlign: 'center' }}>
                    Welcome back
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                    Sign in to access your Chama dashboard
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Box className="space-y-4">
                        <TextField
                            fullWidth
                            label="Email Address"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ py: 1.5, borderRadius: 3, mt: 2, bgcolor: '#0ea5e9' }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </form>

                <Divider sx={{ my: 4 }}>
                    <Typography variant="body2" color="text.secondary">OR</Typography>
                </Divider>

                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    Don't have an account? <Link to="/signup" className="text-sky-500 font-bold">Sign up</Link>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Login;
