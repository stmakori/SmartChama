import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip } from '@mui/material';
import { CHAMA_PACKAGES, MOCK_MEMBERS, PAYOUT_ROTATION } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import MpesaModal from '../components/MpesaModal';
import { ArrowBack, CheckCircle, Schedule, Group } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const PackageDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [modalOpen, setModalOpen] = useState(false);

    const chama = CHAMA_PACKAGES.find(p => p.id === id);

    if (!user) {
        return <Navigate to="/login" state={{ from: `/package/${id}` }} />;
    }

    if (!chama) {
        return <Typography>Package not found</Typography>;
    }

    return (
        <Box className="bg-slate-50 min-h-screen py-8">
            <Container maxWidth="lg">
                <Button
                    component={Link}
                    to="/"
                    startIcon={<ArrowBack />}
                    sx={{ mb: 4, color: '#64748b' }}
                >
                    Back to Packages
                </Button>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Paper sx={{ p: 4, borderRadius: 4, mb: 4 }}>
                            <Box className="flex justify-between items-start mb-6">
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#1e293b' }}>
                                        {chama.name}
                                    </Typography>
                                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                                        {chama.description}
                                    </Typography>
                                </Box>
                                <Chip label="Verified Chama" color="primary" variant="outlined" sx={{ borderRadius: 2 }} />
                            </Box>

                            <Grid container spacing={3} sx={{ mb: 4 }}>
                                <Grid item xs={6} sm={3}>
                                    <Box className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <Typography variant="caption" color="text.secondary">Total Payout</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#10b981' }}>KES {chama.totalPayout.toLocaleString()}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Box className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <Typography variant="caption" color="text.secondary">Contribution</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>KES {chama.contributionAmount.toLocaleString()}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Box className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <Typography variant="caption" color="text.secondary">Frequency</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{chama.frequency}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Box className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <Typography variant="caption" color="text.secondary">Total Members</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{chama.memberCount}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Schedule /> Payout Rotation Schedule
                            </Typography>
                            <TableContainer component={Box} sx={{ border: '1px solid #f1f5f9', borderRadius: 2 }}>
                                <Table size="small">
                                    <TableHead sx={{ bgcolor: '#f8fafc' }}>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 600 }}>Member</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }}>Expected Date</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {PAYOUT_ROTATION.map((item) => (
                                            <TableRow key={item.memberId}>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell>{item.date}</TableCell>
                                                <TableCell>KES {item.amount.toLocaleString()}</TableCell>
                                                <TableCell>
                                                    <Chip
                                                        size="small"
                                                        label={item.status}
                                                        color={item.status === 'Paid' ? 'success' : item.status === 'Pending' ? 'warning' : 'default'}
                                                        sx={{ fontWeight: 500 }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>

                        <Paper sx={{ p: 4, borderRadius: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Group /> Current Members ({MOCK_MEMBERS.length})
                            </Typography>
                            <Box className="flex flex-wrap gap-2">
                                {MOCK_MEMBERS.map(member => (
                                    <Chip key={member.id} label={member.name} variant="outlined" sx={{ borderRadius: 2 }} />
                                ))}
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 4, borderRadius: 4, position: 'sticky', top: 100 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                                Contribution Action
                            </Typography>
                            <Box className="bg-sky-50 p-4 rounded-2xl border border-sky-100 mb-6">
                                <Typography variant="body2" color="primary" sx={{ mb: 1, fontWeight: 600 }}>Next Contribution Due</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 800 }}>KES {chama.contributionAmount.toLocaleString()}</Typography>
                                <Typography variant="caption" color="text.secondary">Due by: 2024-05-10</Typography>
                            </Box>

                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                onClick={() => setModalOpen(true)}
                                sx={{
                                    borderRadius: 3,
                                    py: 2,
                                    bgcolor: '#0ea5e9',
                                    boxShadow: '0 10px 15px -3px rgba(14, 165, 233, 0.3)',
                                    '&:hover': { bgcolor: '#0284c7' }
                                }}
                            >
                                Pay Monthly Contribution
                            </Button>

                            <Typography variant="caption" sx={{ display: 'block', mt: 2, textAlign: 'center', color: '#64748b' }}>
                                Secure payment via M-Pesa
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <MpesaModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                amount={chama.contributionAmount}
            />
        </Box>
    );
};

export default PackageDetails;
