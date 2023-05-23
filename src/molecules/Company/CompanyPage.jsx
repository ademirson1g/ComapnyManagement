import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

import { fetchCompaniesAction } from '../../redux/actions/companyActions';
import { NO_COMPANIES_FOUND } from '../../atoms/TextExports/TextExports';

import CompanyPageCard from './CompanyPageCard';
import ReusableButton from '../../atoms/Buttons/ReusableButton';

const Companies = () => {
    const dispatch = useDispatch();
    const { items: companies, pageIndex, pageSize, itemCount } = useSelector((state) => state.companies);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        dispatch(fetchCompaniesAction());
    }, [dispatch]);

    const handlePageChange = (event, newPageIndex) => {
        dispatch(fetchCompaniesAction('', newPageIndex, pageSize));
    };

    const renderPagination = () => {
        const pageCount = Math.ceil(itemCount / pageSize);

        if (pageCount === 0) {
            return (
                <p>
                    {NO_COMPANIES_FOUND}
                </p>
            );
        }

        return (
            <Pagination
                count={pageCount}
                page={pageIndex}
                onChange={handlePageChange}
                color='primary'
                shape='rounded'
            />
        );
    };

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
                {renderPagination()}
            </Box>
        </div>
    );
};

export default Companies;
