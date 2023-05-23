import React, { useState } from 'react';

import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { addCompanyAction } from '../../redux/actions/companyActions';
import { CANCEL, COMPANY_NAME, COMPANY_NAME_INPUT, SAVE } from '../../atoms/TextExports/TextExports';

import Card from '../../atoms/Card/Card';
import ReusableButton from '../../atoms/Buttons/ReusableButton';

const CompanyPageAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [companyName, setCompanyName] = useState('');
    const [error, setError] = useState('');

    const handleSave = () => {
        dispatch(addCompanyAction({ companyName }))
            .then(() => {
                navigate(-1);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <div style={{ marginTop: '150px' }}>
            {isAuthenticated && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}
                >
                    <Card>
                        <div>
                            <Typography variant='h5'>
                                {COMPANY_NAME_INPUT}
                            </Typography>
                            <TextField
                                label={COMPANY_NAME}
                                sx={{ width: '100%' }}
                                value={companyName}
                                onChange={(event) => setCompanyName(event.target.value)}
                            />
                        </div>
                        {error && <Typography variant='body2' color='error'>{error}</Typography>}
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                            <ReusableButton onClick={handleSave}>
                                {SAVE}
                            </ReusableButton>
                            <ReusableButton style={{ marginLeft: '10px' }} onClick={handleCancel}>
                                {CANCEL}
                            </ReusableButton>
                        </div>
                    </Card>
                </Box>
            )}
        </div >
    );
};

export default CompanyPageAdd;
