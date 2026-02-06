import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box, Typography, CircularProgress, Alert } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const MpesaModal = ({ open, onClose, amount }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState('idle'); // idle, processing, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phoneNumber.match(/^(?:254|\+254|0)?(7|1)\d{8}$/)) {
            setStatus('error');
            setMessage('Please enter a valid M-Pesa phone number.');
            return;
        }

        setStatus('processing');

        // Simulate API call
        setTimeout(() => {
            // 90% success rate for simulation
            const isSuccess = Math.random() > 0.1;
            if (isSuccess) {
                setStatus('success');
                setMessage('Payment successful! Your contribution has been recorded.');
            } else {
                setStatus('error');
                setMessage('Payment failed. Insufficient funds or STK Push timed out.');
            }
        }, 2000);
    };

    const handleClose = () => {
        setStatus('idle');
        setPhoneNumber('');
        setMessage('');
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={status === 'processing' ? null : handleClose}
            fullWidth
            maxWidth="xs"
            PaperProps={{
                sx: { borderRadius: 4, p: 2 }
            }}
        >
            <DialogTitle sx={{ textAlign: 'center', pb: 0 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#1e293b' }}>
                    M-Pesa Payment
                </Typography>
            </DialogTitle>
            <DialogContent>
                <AnimatePresence mode="wait">
                    {status === 'idle' || status === 'error' ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <Box className="mt-4 mb-6 text-center">
                                <Typography variant="body2" color="text.secondary">
                                    You are about to pay <strong>KES {amount.toLocaleString()}</strong> to SmartChama.
                                </Typography>
                            </Box>

                            <form onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    variant="outlined"
                                    placeholder="0712345678"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    disabled={status === 'processing'}
                                    sx={{ mb: 3 }}
                                />

                                {status === 'error' && (
                                    <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                                        {message}
                                    </Alert>
                                )}

                                <Button
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                    size="large"
                                    sx={{
                                        bgcolor: '#25D366', // M-Pesa Green color (approx)
                                        py: 1.5,
                                        borderRadius: 3,
                                        '&:hover': { bgcolor: '#128C7E' }
                                    }}
                                >
                                    Pay Now
                                </Button>
                            </form>
                        </motion.div>
                    ) : status === 'processing' ? (
                        <motion.div
                            key="processing"
                            className="flex flex-col items-center justify-center py-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <CircularProgress size={60} thickness={4} sx={{ mb: 3, color: '#0ea5e9' }} />
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Processing STK Push...</Typography>
                            <Typography variant="body2" color="text.secondary">Check your phone to enter M-Pesa PIN</Typography>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            className="flex flex-col items-center justify-center py-10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            <Box className="bg-emerald-100 p-4 rounded-full mb-4">
                                <Typography variant="h2" sx={{ color: '#10b981' }}>✓</Typography>
                            </Box>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Success!</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mb: 3 }}>
                                {message}
                            </Typography>
                            <Button onClick={handleClose} variant="outlined" fullWidth sx={{ borderRadius: 3 }}>
                                Close
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    );
};

export default MpesaModal;
