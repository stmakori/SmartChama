import React, { useState } from 'react';
import { Paper, Typography, Box, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, LinearProgress, Alert, Dialog, DialogTitle, DialogContent, TextField, MenuItem } from '@mui/material';
import { AccountBalance, InfoOutlined, CheckCircle, Warning } from '@mui/icons-material';

const LoanCenter = ({ loans }) => {
    const [open, setOpen] = useState(false);

    // Mock eligibility rule logic
    const isEligible = true; // Simulating based on "contribution history"
    const maxLoan = 75000;

    return (
        <Box sx={{ mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, borderRadius: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            Loan Eligibility
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Based on your contribution history and current active packages.
                        </Typography>

                        <Box className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 mb-6">
                            <Box className="flex items-center gap-2 mb-2">
                                <CheckCircle color="success" fontSize="small" />
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#059669' }}>Eligible for Loan</Typography>
                            </Box>
                            <Typography variant="h4" sx={{ fontWeight: 800 }}>KES {maxLoan.toLocaleString()}</Typography>
                            <Typography variant="caption" color="text.secondary">Maximum approval limit</Typography>
                        </Box>

                        <Box className="space-y-3 mb-6 flex-grow">
                            <Box className="flex justify-between items-center">
                                <Typography variant="caption" color="text.secondary">Enrolled Packages</Typography>
                                <Typography variant="caption" sx={{ fontWeight: 700 }}>2/2</Typography>
                            </Box>
                            <Box className="flex justify-between items-center">
                                <Typography variant="caption" color="text.secondary">Monthly Savings Avg</Typography>
                                <Typography variant="caption" sx={{ fontWeight: 700 }}>KES 7,500</Typography>
                            </Box>
                            <Box className="flex justify-between items-center">
                                <Typography variant="caption" color="text.secondary">Credit Score</Typography>
                                <Typography variant="caption" sx={{ fontWeight: 700, color: '#10b981' }}>Good</Typography>
                            </Box>
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => setOpen(true)}
                            sx={{ borderRadius: 3, py: 1.5, bgcolor: '#0ea5e9', '&:hover': { bgcolor: '#0284c7' } }}
                        >
                            Apply for Loan
                        </Button>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, borderRadius: 4, height: '100%' }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                            My Loans
                        </Typography>

                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ '& th': { color: '#64748b', fontWeight: 600, borderBottom: '1px solid #f1f5f9' } }}>
                                        <TableCell>Application ID</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Term</TableCell>
                                        <TableCell>Repayment Progress</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {loans.map((loan) => (
                                        <TableRow key={loan.id} sx={{ '& td': { borderBottom: '1px solid #f1f5f9' } }}>
                                            <TableCell sx={{ fontWeight: 600 }}>{loan.id}</TableCell>
                                            <TableCell>
                                                <Typography variant="body2" sx={{ fontWeight: 600 }}>KES {loan.amount.toLocaleString()}</Typography>
                                                <Typography variant="caption" color="text.secondary">Applied: {loan.appliedDate}</Typography>
                                            </TableCell>
                                            <TableCell>{loan.term}</TableCell>
                                            <TableCell sx={{ minWidth: 150 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={loan.progress}
                                                            sx={{ height: 6, borderRadius: 3, bgcolor: '#f1f5f9', '& .MuiLinearProgress-bar': { bgcolor: loan.progress === 100 ? '#10b981' : '#0ea5e9' } }}
                                                        />
                                                    </Box>
                                                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{loan.progress}%</Typography>
                                                </Box>
                                                <Typography variant="caption" color="text.secondary">Remaining: KES {loan.repaymentLeft.toLocaleString()}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={loan.status}
                                                    size="small"
                                                    color={loan.status === 'Approved' ? 'success' : loan.status === 'Repaid' ? 'default' : 'warning'}
                                                    sx={{ fontWeight: 600, borderRadius: 1.5 }}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>

            {/* Loan Application Dialog */}
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="xs" PaperProps={{ sx: { borderRadius: 4, p: 1 } }}>
                <DialogTitle sx={{ fontWeight: 800 }}>Apply for a Loan</DialogTitle>
                <DialogContent>
                    <Box component="form" className="space-y-4 pt-2">
                        <Alert icon={<InfoOutlined fontSize="inherit" />} severity="info" sx={{ borderRadius: 3 }}>
                            Interest rate is fixed at 5% per month for all members.
                        </Alert>
                        <TextField fullWidth label="Loan Amount (KES)" placeholder="e.g. 50000" type="number" variant="outlined" />
                        <TextField fullWidth select label="Repayment Period" defaultValue="6" variant="outlined">
                            <MenuItem value="1">1 Month</MenuItem>
                            <MenuItem value="3">3 Months</MenuItem>
                            <MenuItem value="6">6 Months</MenuItem>
                            <MenuItem value="12">12 Months</MenuItem>
                        </TextField>
                        <TextField fullWidth select label="Select Package Source" defaultValue="p2" variant="outlined">
                            <MenuItem value="p2">Monthly Growth</MenuItem>
                            <MenuItem value="p5">Education Fund</MenuItem>
                        </TextField>
                        <Button fullWidth variant="contained" sx={{ mt: 2, py: 1.5, borderRadius: 3, bgcolor: '#0ea5e9' }} onClick={() => setOpen(false)}>
                            Submit Application
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default LoanCenter;
