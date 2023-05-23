import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box } from '@mui/material';

const Card = ({ children, sx }) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box
            sx={{
                borderRadius: '15px',
                border: '2px solid black',
                overflow: 'hidden',
                padding: '10px',
            }}
        >
            {children} {sx}
        </Box>
    </Grid>
);

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
