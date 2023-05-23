import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography } from '@mui/material'
import { FaGoogle } from 'react-icons/fa'

import { GOOGLE, HOMEPAGE_COMPANY_TEXT, LOGIN_GOOGLE } from '../../atoms/TextExports/TextExports'
import Companies from '../Company/CompanyPage'
import ReusableButton from '../../atoms/Buttons/ReusableButton'

const HomePageLogin = ({ isAuthenticated, handleSignIn, handleLogout }) => {
    if (!isAuthenticated) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "350px"
                }}
            >
                <div style={{ fontStyle: "italic", textAlign: "center" }}>
                    <Typography >
                        {HOMEPAGE_COMPANY_TEXT}
                    </Typography>
                    <Typography>
                        {LOGIN_GOOGLE}
                    </Typography>
                </div>
                <ReusableButton
                    onClick={handleSignIn}
                    startIcon={<FaGoogle />}
                >
                    {GOOGLE}
                </ReusableButton>
            </Box>
        )
    }
    return (
        <Companies />
    )
}

HomePageLogin.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    handleSignIn: PropTypes.func.isRequired
}

export default HomePageLogin