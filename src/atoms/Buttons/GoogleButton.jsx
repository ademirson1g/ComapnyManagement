import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

import { HOMEPAGE_COMPANY_TEXT, LOGIN_GOOGLE_BUTTON_TEXT, LOGIN_GOOGLE } from '../TextExports/TextExports'
import Companies from '../../molecules/Company/Companies'

const GoogleButton = ({ isAuthenticated, handleSignIn }) => {
    if (!isAuthenticated) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    {HOMEPAGE_COMPANY_TEXT}
                </Typography>
                <Typography variant="subtitle1" align="center" gutterBottom>
                    {LOGIN_GOOGLE}
                </Typography>
                <Button onClick={handleSignIn}>
                    {LOGIN_GOOGLE_BUTTON_TEXT}
                </Button>
            </Box>
        )
    }
    return (
        <Companies />
    )
}

GoogleButton.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    handleSignIn: PropTypes.func.isRequired
}

export default GoogleButton