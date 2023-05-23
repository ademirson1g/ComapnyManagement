import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

import { logout } from '../../redux/actions/authActions';
import SubNavbar from './SubNavbar';
import { checkAuth } from '../../redux/api/apiCallAuth';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const initialLogin = useSelector((state) => state.auth.isAuthenticated)

    useEffect(() => {
        setIsAuthenticated(checkAuth())
    }, [initialLogin])

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <AppBar sx={{ backgroundColor: '#93ACBD' }}>
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    borderBottom: '1px solid black',
                }}
            >
                <Typography sx={{ color: 'black', fontSize: '30px' }}>
                    {isAuthenticated ? 'Companies' : 'Home'}
                </Typography>
                {isAuthenticated && (
                    <Button onClick={handleLogout} sx={{ color: 'black' }}>
                        Logout
                    </Button>
                )}
            </Toolbar>
            <SubNavbar
                isAuthenticated={isAuthenticated}
            />
        </AppBar>
    );
};

export default Navbar;
