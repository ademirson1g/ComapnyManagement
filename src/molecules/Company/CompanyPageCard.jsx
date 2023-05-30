import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { CardContent, CardActions } from '@mui/material'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deleteCompanyAction, fetchCompaniesAction, fetchCompanyByIdAction } from '../../redux/actions/companyActions'
import Card from '../../atoms/Card/Card'
import CompanyPageDeleteModal from './CompanyPageDeleteModal'

const CompanyPageCard = ({ company }) => {
    const dispatch = useDispatch()

    const { companyId, companyName } = company
    const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleDelete = async () => {
        setIsLoading(true)
        await dispatch(deleteCompanyAction(companyId))
        setIsLoading(false)
        dispatch(fetchCompaniesAction())
    }

    const handleEdit = () => {
        dispatch(fetchCompanyByIdAction(companyId))
    }

    const handleDeleteWithLoading = async () => {
        setIsLoading(true);
        await handleDelete();
        setIsLoading(false);
        handleCloseModal();
    };

    return (
        <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardContent sx={{ overflow: "hidden" }}>{companyName}</CardContent>
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
                isLoading={isLoading}
                handleDeleteWithLoading={handleDeleteWithLoading}
            />
        </Card>
    )
}

CompanyPageCard.propTypes = {
    company: PropTypes.object.isRequired
}

export default CompanyPageCard
