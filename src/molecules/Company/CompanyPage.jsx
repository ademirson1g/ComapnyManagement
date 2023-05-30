import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Box, CircularProgress, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

import { fetchCompaniesAction } from '../../redux/actions/companyActions'

import CompanyPageCard from './CompanyPageCard'
import ReusableButton from '../../atoms/Buttons/ReusableButton'
import PaginationPage from '../../atoms/Pagination/PaginationPage'

const Companies = () => {
    const dispatch = useDispatch()
    const { items: companies, pageIndex, pageSize, itemCount, loading } = useSelector((state) => state.companies)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    useEffect(() => {
        dispatch(fetchCompaniesAction())
    }, [dispatch])

    const handlePageChange = (event, newPageIndex) => {
        dispatch(fetchCompaniesAction('', newPageIndex, pageSize))
    }

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '15px' }}>
                    <Link to='/draggable_companies'>
                        <ReusableButton>Draggable Companies</ReusableButton>
                    </Link>
                </div>
                <Link to='/expandable_text'>
                    <ReusableButton>Expandable Text</ReusableButton>
                </Link>
            </div>
            <Grid container spacing={6} sx={{ marginTop: '5px' }}>
                {companies.map((company) => (
                    <CompanyPageCard
                        key={company.companyId}
                        company={company}
                        isAuthenticated={isAuthenticated}
                    />
                ))}
            </Grid>
            <Box
                position='relative'
                top={50}
                transform='translateX(-50%)'
                maxWidth={400}
            >
                <PaginationPage
                    pageCount={Math.ceil(itemCount / pageSize)}
                    pageIndex={pageIndex}
                    onChange={handlePageChange}
                />
            </Box>
        </div>
    )
}

export default Companies
