import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box, Divider } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(formData);
        navigate('/');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Container maxWidth="xs" sx={{ py: 12 }}>
            <Paper sx={{ p: 5, borderRadius: 5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, textAlign: 'center' }}>
                    Create Account
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                    Start your financial journey with us
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Box className="space-y-4">
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ py: 1.5, borderRadius: 3, mt: 2, bgcolor: '#0ea5e9' }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </form>

                <Divider sx={{ my: 4 }}>
                    <Typography variant="body2" color="text.secondary">OR</Typography>
                </Divider>

                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    Already have an account? <Link to="/login" className="text-sky-500 font-bold">Sign in</Link>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Signup;
