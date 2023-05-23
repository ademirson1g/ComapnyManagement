import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

import { fetchCompaniesAction } from '../../redux/actions/companyActions'
import CompanyPageCard from './CompanyPageCard'
import ReusableButton from '../../atoms/Buttons/ReusableButton'

const Companies = () => {
    const dispatch = useDispatch()
    const companies = useSelector((state) => state.companies.items)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    useEffect(() => {
        dispatch(fetchCompaniesAction())
    }, [dispatch])

    return (
        <div style={{ marginTop: '150px' }}>
            <Link to="/draggable_companies">
                <ReusableButton>Draggable Companies</ReusableButton>
            </Link>
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
                position="relative"
                top={50}
                left="50%"
                transform="translateX(-50%)"
                maxWidth={400}
            >
            </Box>
        </div>
    )
}

export default Companies
