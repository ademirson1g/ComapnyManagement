import React from 'react';
import PropTypes from 'prop-types';
import { CardContent, Card, Typography } from '@mui/material';

const DraggableItemName = ({ company }) => {
    const { companyName } = company;

    return (
        <Card variant="outlined" style={{ marginBottom: '10px' }}>
            <CardContent>
                <Typography variant="body1" align="center">{companyName}</Typography>
            </CardContent>
        </Card>
    );
};

DraggableItemName.propTypes = {
    company: PropTypes.object
}

export default DraggableItemName;
