import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { CHAMA_PACKAGES } from '../data/mockData';
import PackageCard from '../components/PackageCard';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSelectPackage = (chama) => {
        if (user) {
            navigate(`/package/${chama.id}`);
        } else {
            navigate('/login', { state: { from: `/package/${chama.id}` } });
        }
    };

    return (
        <Box className="bg-slate-50 min-h-screen py-12">
            <Container maxWidth="lg">
                <Box className="text-center mb-16">
                    <Typography
                        variant="h2"
                        sx={{ fontWeight: 800, color: '#1e293b', mb: 2, fontSize: { xs: '2.5rem', md: '3.75rem' } }}
                    >
                        Save Together, <span className="text-sky-500">Grow Faster</span>
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#64748b', maxWidth: 600, mx: 'auto' }}>
                        Join a digital Chama today and experience a secure, transparent, and rewarding way to pool savings with others.
                    </Typography>
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#1e293b', mb: 6 }}>
                    Available Chama Packages
                </Typography>

                <Grid container spacing={4}>
                    {CHAMA_PACKAGES.map((chama) => (
                        <Grid item xs={12} sm={6} md={4} key={chama.id}>
                            <PackageCard chama={chama} onSelect={handleSelectPackage} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
