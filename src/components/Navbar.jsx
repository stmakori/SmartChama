import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Container, Badge, Menu, MenuItem, ListItemIcon, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Notifications, History, Payment, TrendingUp, Settings, Logout } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { NOTIFICATIONS } from '../data/mockData';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleNotifOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotifClose = () => {
        setAnchorEl(null);
    };

    const navItems = user ? [
        { label: 'Home', path: '/' },
        { label: 'Dashboard', path: '/dashboard' },
    ] : [
        { label: 'Home', path: '/' },
        { label: 'Login', path: '/login' },
        { label: 'Signup', path: '/signup' },
    ];

    const unreadCount = NOTIFICATIONS.filter(n => !n.read).length;

    return (
        <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #e2e8f0', color: '#1e293b', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'none',
                            fontWeight: 700,
                            color: '#0ea5e9',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        SmartChama
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component={Link}
                                to={item.path}
                                sx={{ color: '#475569', fontWeight: 500 }}
                            >
                                {item.label}
                            </Button>
                        ))}

                        {user && (
                            <>
                                <IconButton onClick={handleNotifOpen} sx={{ color: '#64748b' }}>
                                    <Badge badgeContent={unreadCount} color="error">
                                        <Notifications />
                                    </Badge>
                                </IconButton>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={handleLogout}
                                    startIcon={<Logout />}
                                    sx={{ ml: 1, borderRadius: 2 }}
                                >
                                    Logout
                                </Button>
                            </>
                        )}
                    </Box>

                    {/* Mobile Notif Badge */}
                    <Box sx={{ display: { md: 'none' }, mr: 1 }}>
                        {user && (
                            <IconButton onClick={handleNotifOpen} sx={{ color: '#64748b' }}>
                                <Badge badgeContent={unreadCount} color="error" size="small">
                                    <Notifications />
                                </Badge>
                            </IconButton>
                        )}
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' }, color: '#475569' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>

            {/* Notifications Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleNotifClose}
                PaperProps={{
                    sx: { width: 320, mt: 1.5, borderRadius: 4, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Notifications</Typography>
                    <Typography variant="caption" sx={{ color: '#0ea5e9', cursor: 'pointer' }}>Mark all as read</Typography>
                </Box>
                <Divider />
                {NOTIFICATIONS.map((notif) => (
                    <MenuItem key={notif.id} onClick={handleNotifClose} sx={{ py: 1.5, px: 2, whiteSpace: 'normal' }}>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                <Typography variant="body2" sx={{ fontWeight: 600, flex: 1 }}>{notif.title}</Typography>
                                {!notif.read && <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#0ea5e9' }} />}
                            </Box>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>{notif.message}</Typography>
                            <Typography variant="caption" sx={{ color: '#94a3b8', mt: 0.5, display: 'block' }}>{notif.date}</Typography>
                        </Box>
                    </MenuItem>
                ))}
            </Menu>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
            >
                <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <ListItemButton component={Link} to={item.path}>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        {user && (
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleLogout}>
                                    <ListItemText primary="Logout" />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
