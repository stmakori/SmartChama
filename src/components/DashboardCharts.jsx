import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, AreaChart, Area } from 'recharts';

const DashboardCharts = ({ contributionData, distributionData }) => {
    const COLORS = ['#0ea5e9', '#10b981', '#6366f1', '#f59e0b', '#ef4444'];

    return (
        <Box sx={{ width: '100%', p: { xs: 1, sm: 2 } }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {/* Contribution History Chart */}
                <Grid item xs={12} lg={8}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 2, sm: 3 },
                            height: '100%',
                            minHeight: { xs: 300, sm: 400 },
                            bgcolor: 'rgba(255, 255, 255, 0.45)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            borderRadius: 4,
                            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)'
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                mb: 2
                            }}
                        >
                            Contribution History (Last 6 Months)
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={contributionData}
                                margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="month"
                                    tick={{ fontSize: 12 }}
                                    angle={-45}
                                    textAnchor="end"
                                    height={60}
                                />
                                <YAxis tick={{ fontSize: 12 }} />
                                <Tooltip />
                                <Bar dataKey="amount" fill="#0ea5e9" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                {/* Portfolio Mix Chart */}
                <Grid item xs={12} lg={4}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 2, sm: 3 },
                            height: '100%',
                            minHeight: { xs: 300, sm: 400 },
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: 'rgba(255, 255, 255, 0.45)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            borderRadius: 4,
                            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)'
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                mb: 2
                            }}
                        >
                            Portfolio Mix
                        </Typography>
                        <Box sx={{ flex: 1, minHeight: 0 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={distributionData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        outerRadius="70%"
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {distributionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend
                                        wrapperStyle={{ fontSize: '12px' }}
                                        iconSize={10}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardCharts;