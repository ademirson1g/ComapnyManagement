import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';

import { addCompanyAction } from '../../redux/actions/companyActions';
import Card from '../../atoms/Card/Card';
import ReusableButton from '../../atoms/Buttons/ReusableButton';
import { useNavigate } from 'react-router';

const CompanyPageAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [companyName, setCompanyName] = useState('');

    const handleSave = () => {
        dispatch(addCompanyAction({ companyName }));
        navigate(-1)
    };

    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <div>
            {/* Make it Responsive */}
            {isAuthenticated && (
                <Box
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '150px',
                    }}
                >
                    <Card>
                        <div style={{ display: 'flex' }}>
                            <Typography variant="h5" sx={{ marginTop: '15px' }}>
                                Unesi ime kompanije :
                            </Typography>
                            <TextField
                                label="Ime kompanije"
                                fullWidth
                                value={companyName}
                                onChange={(event) => setCompanyName(event.target.value)}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                            <ReusableButton onClick={handleSave}>
                                Save
                            </ReusableButton>
                            <ReusableButton style={{ marginLeft: "10px" }} onClick={handleCancel}>
                                Cancel
                            </ReusableButton>
                        </div>
                    </Card>
                </Box>
            )}
        </div>
    );
};

export default CompanyPageAdd;

