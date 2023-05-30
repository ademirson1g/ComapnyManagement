import React from 'react';
import PropTypes from 'prop-types'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, CircularProgress } from '@mui/material';

import { DELETE_TEXT, NO, YES } from '../../atoms/TextExports/TextExports';

const CompanyPageDeleteModal = ({ openModal, handleCloseModal, companyName, isLoading, handleDeleteWithLoading }) => {
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

CompanyPageDeleteModal.propTypes = {
    companyName: PropTypes.string,
    handleCloseModal: PropTypes.func.isRequired,
    handleDeleteWithLoading: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    openModal: PropTypes.bool
}

export default CompanyPageDeleteModal;
