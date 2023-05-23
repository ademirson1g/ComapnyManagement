import React from 'react';
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

export default DraggableItemName;
