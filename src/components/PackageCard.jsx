import React from 'react';
import { Card, CardContent, Typography, Button, Box, Divider } from '@mui/material';
import { AccountBalanceWallet, Groups, Event } from '@mui/icons-material';
import { motion } from 'framer-motion';

const PackageCard = ({ chama, onSelect }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    bgcolor: 'rgba(255, 255, 255, 0.55)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    transition: 'all 0.3s',
                    '&:hover': {
                        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                        bgcolor: 'rgba(255, 255, 255, 0.75)',
                    }
                }}
            >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box className="flex items-center justify-between mb-4">
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b' }}>
                            {chama.name}
                        </Typography>
                        <Box className="bg-sky-100 p-2 rounded-xl text-sky-600">
                            <AccountBalanceWallet />
                        </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {chama.description}
                    </Typography>

                    <Divider sx={{ mb: 3 }} />

                    <Box className="space-y-3">
                        <Box className="flex items-center gap-3 text-slate-600">
                            <Event fontSize="small" />
                            <Typography variant="body2">
                                <strong>Contribution:</strong> KES {chama.contributionAmount.toLocaleString()} / {chama.frequency}
                            </Typography>
                        </Box>
                        <Box className="flex items-center gap-3 text-slate-600">
                            <Groups fontSize="small" />
                            <Typography variant="body2">
                                <strong>Members:</strong> {chama.memberCount} members
                            </Typography>
                        </Box>
                        <Box className="flex items-center gap-3 text-slate-600">
                            <AccountBalanceWallet fontSize="small" className="text-emerald-500" />
                            <Typography variant="body2" sx={{ color: '#059669', fontWeight: 600 }}>
                                <strong>Payout:</strong> KES {chama.totalPayout.toLocaleString()}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                <Box sx={{ p: 3, pt: 0 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => onSelect(chama)}
                        sx={{
                            borderRadius: 3,
                            py: 1.5,
                            bgcolor: '#0ea5e9',
                            '&:hover': { bgcolor: '#0284c7' }
                        }}
                    >
                        Join This Chama
                    </Button>
                </Box>
            </Card>
        </motion.div>
    );
};

export default PackageCard;
