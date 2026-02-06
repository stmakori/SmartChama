import React from 'react';
import { Grid, Paper, Typography, Box, Avatar } from '@mui/material';
import { AccountBalanceWallet, Savings, Payments, TrendingUp } from '@mui/icons-material';

const DashboardStats = ({ stats }) => {
    const statItems = [
        {
            title: 'Total Contributed',
            value: `KES ${stats.totalContributed.toLocaleString()}`,
            icon: <Savings />,
            color: '#0ea5e9',
            bg: '#f0f9ff'
        },
        {
            title: 'Expected Payouts',
            value: `KES ${stats.expectedPayouts.toLocaleString()}`,
            icon: <TrendingUp />,
            color: '#10b981',
            bg: '#ecfdf5'
        },
        {
            title: 'Active Loans',
            value: `KES ${stats.activeLoans.toLocaleString()}`,
            icon: <Payments />,
            color: '#f59e0b',
            bg: '#fffbeb'
        },
        {
            title: 'Wallet Balance',
            value: `KES ${stats.balance.toLocaleString()}`,
            icon: <AccountBalanceWallet />,
            color: '#6366f1',
            bg: '#eef2ff'
        }
    ];

    return (
        <Grid container spacing={3} sx={{ mb: 4 }}>
            {statItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Paper sx={{ p: 3, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: item.bg, color: item.color, width: 56, height: 56 }}>
                            {item.icon}
                        </Avatar>
                        <Box>
                            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                                {item.title}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                                {item.value}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default DashboardStats;
