import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';

import { NOT_FOUND_TEXT, PAGE_NOT_FOUND, RETURN_TO_HOME_PAGE, RETURN_TO_HOME_PAGE_TEXT } from '../TextExports/TextExports';
import ReusableButton from '../Buttons/ReusableButton';

const NoPageFound = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                backgroundColor: 'gray.100',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: 'md',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h2" fontWeight="bold">
                    {NOT_FOUND_TEXT}
                </Typography>
                <Typography variant="h5" fontWeight="light" mt={2} mb={4}>
                    {PAGE_NOT_FOUND}
                </Typography>
                <Typography variant="body1" mb={2}>
                    {RETURN_TO_HOME_PAGE_TEXT}
                </Typography>
                <Link to="/">
                    <ReusableButton variant="contained">{RETURN_TO_HOME_PAGE}</ReusableButton>
                </Link>
            </Box>
        </Box>
    );
};

export default NoPageFound;
