import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CardContent, CardActions } from '@mui/material';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Card from '../../atoms/Card/Card';
import CompanyPageDeleteModal from './CompanyPageDeleteModal';
import { deleteCompanyAction, fetchCompaniesAction, fetchCompanyByIdAction } from '../../redux/actions/companyActions';

const CompanyPageCard = ({ company, isAuthenticated }) => {
    const dispatch = useDispatch();

    const { companyId, companyName } = company;
    const [openModal, setOpenModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleDelete = async () => {
        setIsDeleting(true);
        await dispatch(deleteCompanyAction(companyId));
        setIsDeleting(false);
        dispatch(fetchCompaniesAction())
    };

    const handleEdit = () => {
        dispatch(fetchCompanyByIdAction(companyId));
    };

    return (
        <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardContent>{companyName}</CardContent>
                <CardActions sx={{ cursor: 'pointer' }}>
                    <Link to={'/edit/'} onClick={handleEdit}>
                        <CardActions sx={{ color: 'black' }}>
                            <FaEdit />
                        </CardActions>
                    </Link>
                    <FaTrash onClick={handleOpenModal} />
                </CardActions>
            </div>
            <CompanyPageDeleteModal
                companyName={companyName}
                openModal={openModal}
                handleCloseModal={handleCloseModal}
                handleDelete={handleDelete}
                isLoading={isDeleting}
            />
        </Card>
    );
};

CompanyPageCard.propTypes = {
    company: PropTypes.object.isRequired,
};

export default CompanyPageCard;
