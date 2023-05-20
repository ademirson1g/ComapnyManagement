import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardActions, Button, Grid, Box } from '@mui/material';

const CompanyPageCard = ({ company }) => {
    const { companyName } = company

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ width: '100%', maxWidth: '300px' }}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">
                            Company Name:
                        </Typography>
                        <Typography variant="subtitle1">
                            {companyName}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Edit
                        </Button>
                        <Button size="small" color="secondary">
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    );
};

CompanyPageCard.propTypes = {
    company: PropTypes.object
};

export default CompanyPageCard;
