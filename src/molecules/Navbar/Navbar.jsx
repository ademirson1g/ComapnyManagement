import React from 'react'
import { useSelector } from 'react-redux'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export default function Navbar() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    const getText = () => {
        return isAuthenticated ? 'Companies' : 'Home'
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
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
                </Toolbar>
            </AppBar>
        </Box>
    )
}