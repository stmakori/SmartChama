import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend, AreaChart, Area
} from 'recharts';

const DashboardCharts = ({ contributionData, distributionData }) => {
    const COLORS = ['#0ea5e9', '#10b981', '#6366f1', '#f59e0b', '#ef4444'];

    return (
        <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={8}>
                <Paper sx={{ p: 3, borderRadius: 4, height: 400 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                        Contribution History (Last 6 Months)
                    </Typography>
                    <ResponsiveContainer width="100%" height="85%">
                        <AreaChart data={contributionData}>
                            <defs>
                                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                itemStyle={{ fontWeight: 600, color: '#0ea5e9' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="amount"
                                stroke="#0ea5e9"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorAmount)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, borderRadius: 4, height: 400 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                        Portfolio Mix
                    </Typography>
                    <ResponsiveContainer width="100%" height="85%">
                        <PieChart>
                            <Pie
                                data={distributionData}
                                cx="50%"
                                cy="45%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {distributionData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                            />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default DashboardCharts;
