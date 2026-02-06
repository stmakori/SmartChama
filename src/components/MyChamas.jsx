import React from 'react';
import { Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, LinearProgress, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CHAMA_PACKAGES } from '../data/mockData';

const MyChamas = ({ enrolledPackages }) => {
    return (
        <Paper sx={{ p: 3, borderRadius: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    My Enrolled Chamas
                </Typography>
                <Button component={Link} to="/" variant="text" size="small" sx={{ color: '#0ea5e9', fontWeight: 700 }}>
                    View All Packages
                </Button>
            </Box>

            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow sx={{ '& th': { color: '#64748b', fontWeight: 600, borderBottom: '1px solid #f1f5f9' } }}>
                            <TableCell>Chama Name</TableCell>
                            <TableCell>Next Contribution</TableCell>
                            <TableCell>Total Contributed</TableCell>
                            <TableCell>Payout Progress</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {enrolledPackages.map((pkg) => {
                            const fullDetails = CHAMA_PACKAGES.find(p => p.id === pkg.packageId);
                            return (
                                <TableRow key={pkg.packageId} sx={{ '& td': { borderBottom: pkg.packageId === enrolledPackages[enrolledPackages.length - 1].packageId ? 'none' : '1px solid #f1f5f9' } }}>
                                    <TableCell>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{fullDetails?.name}</Typography>
                                        <Typography variant="caption" color="text.secondary">{fullDetails?.frequency} contribution</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>KES {fullDetails?.contributionAmount.toLocaleString()}</Typography>
                                        <Typography variant="caption" color="text.secondary">Next: Jun 15, 2024</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>KES {pkg.totalContributed.toLocaleString()}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ minWidth: 150 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={pkg.payoutProgress}
                                                    sx={{ height: 6, borderRadius: 3, bgcolor: '#f1f5f9', '& .MuiLinearProgress-bar': { bgcolor: '#0ea5e9' } }}
                                                />
                                            </Box>
                                            <Typography variant="caption" sx={{ fontWeight: 600 }}>{pkg.payoutProgress}%</Typography>
                                        </Box>
                                        <Typography variant="caption" color="text.secondary">Next payout: {pkg.nextPayoutDate}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={pkg.paymentStatus}
                                            size="small"
                                            color={pkg.paymentStatus === 'Up to Date' ? 'success' : 'warning'}
                                            sx={{ fontWeight: 600, borderRadius: 1.5 }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            component={Link}
                                            to={`/package/${pkg.packageId}`}
                                            variant="outlined"
                                            size="small"
                                            sx={{ borderRadius: 2 }}
                                        >
                                            Details
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default MyChamas;
