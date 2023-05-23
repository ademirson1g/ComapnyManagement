import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, CircularProgress } from '@mui/material';

import { DELETE_TEXT, NO, YES } from '../../atoms/TextExports/TextExports';

const CompanyPageDeleteModal = ({ openModal, handleCloseModal, handleDelete, companyName }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteWithLoading = async () => {
        setIsLoading(true);
        await handleDelete();
        setIsLoading(false);
        handleCloseModal();
    };

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>{DELETE_TEXT}</DialogTitle>
            <DialogContent>{companyName}</DialogContent>
            <DialogActions>
                {isLoading ? (
                    <CircularProgress size={24} />
                ) : (
                    <>
                        <Button onClick={handleDeleteWithLoading}>{YES}</Button>
                        <Button onClick={handleCloseModal}>{NO}</Button>
                    </>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default CompanyPageDeleteModal;
