import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField } from '@mui/material';
import Card from '../../atoms/Card/Card';
import { useNavigate } from 'react-router';
import ReusableButton from '../../atoms/Buttons/ReusableButton';
import { updateCompanyAction } from '../../redux/actions/companyActions';

const CompanyPageEdit = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const companyNameById = useSelector((state) => state.companies.currentCompany);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    const [editedCompanyName, setEditedCompanyName] = useState('');

    useEffect(() => {
        if (companyNameById) {
            setEditedCompanyName(companyNameById.companyName);
        }
    }, [companyNameById]);

    const handleSave = async () => {
        dispatch(updateCompanyAction(
            companyNameById.companyId,
            {
                companyName: editedCompanyName
            }));
        navigate(-1);
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
                            label="Edit your company"
                            value={editedCompanyName}
                            onChange={(event) => setEditedCompanyName(event.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ display: "flex", marginBottom: "20px", padding: "5px" }}>
                            <ReusableButton
                                onClick={handleSave}
                            >
                                Save
                            </ReusableButton>
                            <ReusableButton
                                style={{ marginLeft: "10px" }}
                                onClick={handleCancel}
                            >
                                Cancel
                            </ReusableButton>
                        </div>
                    </Box>
                </Card>
            )}
        </div>
    );
};

export default CompanyPageEdit;
