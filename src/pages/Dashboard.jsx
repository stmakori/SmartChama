import React from 'react';
import { Container, Typography, Box, Grid, Alert, IconButton } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import DashboardStats from '../components/DashboardStats';
import DashboardCharts from '../components/DashboardCharts';
import MyChamas from '../components/MyChamas';
import LoanCenter from '../components/LoanCenter';
import { USER_ENROLLED_PACKAGES, CONTRIBUTION_HISTORY, LOAN_APPLICATIONS, CHAMA_PACKAGES } from '../data/mockData';
import { Close } from '@mui/icons-material';

const Dashboard = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    // Calculate stats based on mock data
    const stats = {
        totalContributed: USER_ENROLLED_PACKAGES.reduce((acc, curr) => acc + curr.totalContributed, 0),
        expectedPayouts: USER_ENROLLED_PACKAGES.reduce((acc, curr) => {
            const pkg = CHAMA_PACKAGES.find(p => p.id === curr.packageId);
            return acc + (pkg?.totalPayout || 0);
        }, 0),
        activeLoans: LOAN_APPLICATIONS.filter(l => l.status === 'Approved').reduce((acc, curr) => acc + curr.repaymentLeft, 0),
        balance: 12500, // Mock wallet balance
    };

    // Pie chart data
    const distributionData = USER_ENROLLED_PACKAGES.map(pkg => {
        const full = CHAMA_PACKAGES.find(p => p.id === pkg.packageId);
        return { name: full?.name, value: pkg.totalContributed };
    });

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(rgba(248, 250, 252, 0.65), rgba(248, 250, 252, 0.85)), url("/dashboard.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Box className="flex items-center justify-between mb-8">
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#1e293b' }}>
                            Welcome back, {user.name}!
                        </Typography>
                        <Typography sx={{ color: '#64748b', fontWeight: 500 }}>
                            Here's what's happening with your Chama savings today.
                        </Typography>
                    </Box>
                </Box>

                <Alert
                    severity="warning"
                    sx={{
                        mb: 4,
                        borderRadius: 3,
                        border: '1px solid #fef3c7',
                        bgcolor: 'rgba(255, 251, 235, 0.8)',
                        backdropFilter: 'blur(8px)'
                    }}
                    action={
                        <IconButton size="small"><Close fontSize="small" /></IconButton>
                    }
                >
                    You have a pending contribution of <strong>KES 5,000</strong> for Monthly Growth due in 3 days.
                </Alert>

                <DashboardStats stats={stats} />

                <DashboardCharts contributionData={CONTRIBUTION_HISTORY} distributionData={distributionData} />

                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <MyChamas enrolledPackages={USER_ENROLLED_PACKAGES} />
                    </Grid>
                    <Grid item xs={12}>
                        <LoanCenter loans={LOAN_APPLICATIONS} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Dashboard;
