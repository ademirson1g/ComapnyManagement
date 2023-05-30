import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import { updateCompanyAction } from '../../redux/actions/companyActions';
import { CANCEL, EDIT_COMPANY, SAVE } from '../../atoms/TextExports/TextExports';

import Card from '../../atoms/Card/Card';
import ReusableButton from '../../atoms/Buttons/ReusableButton';

const CompanyPageEdit = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const companyNameById = useSelector((state) => state.companies.currentCompany);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    const [editedCompanyName, setEditedCompanyName] = useState('');
    const [error, setError] = useState('')

    useEffect(() => {
        if (companyNameById) {
            setEditedCompanyName(companyNameById.companyName);
        }
    }, [companyNameById]);

    const handleSave = async () => {
        await dispatch(updateCompanyAction(
            companyNameById.companyId,
            {
                companyName: editedCompanyName
            })).then(() => {
                navigate(-1);
            }).catch((error) => {
                setError(error.message);
            });
    }

    const handleCancel = () => {
        navigate(-1)
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", marginTop: "150px" }}>
            {isAuthenticated && (
                <Card>
                    <Box>
                        <TextField
                            label={EDIT_COMPANY}
                            value={editedCompanyName}
                            onChange={(event) => setEditedCompanyName(event.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        {error && <Typography variant="body2" color="error">{error}</Typography>}
                        <div style={{ display: "flex", marginBottom: "20px", padding: "5px" }}>
                            <ReusableButton
                                onClick={handleSave}
                            >
                                {SAVE}
                            </ReusableButton>
                            <ReusableButton
                                style={{ marginLeft: "10px" }}
                                onClick={handleCancel}
                            >
                                {CANCEL}
                            </ReusableButton>
                        </div>
                    </Box>
                </Card>
            )}
        </div>
    );
};

export default CompanyPageEdit;
