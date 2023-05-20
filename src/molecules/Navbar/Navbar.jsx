import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

import { logout } from '../../redux/actions/authActions'

export default function Navbar() {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    const handleLogout = () => {
        dispatch(logout())
    }

    const getText = () => {
        return isAuthenticated ? 'Companies' : 'Home'
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#93ACBD' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'center'
                        }}>
                        {getText()}
                    </Typography>
                    {isAuthenticated && (
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}