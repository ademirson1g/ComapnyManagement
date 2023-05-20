import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid } from '@mui/material';

import { fetchCompaniesAction } from '../../redux/actions/companyActions';
import CompanyPageCard from './CompanyPageCard';
import Pagination from '../../atoms/Pagination/Pagination';

const Companies = () => {
    const dispatch = useDispatch();
    const companies = useSelector((state) => state.companies.items);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        dispatch(fetchCompaniesAction());
    }, [dispatch]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = companies.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(companies.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <h1>Company List</h1>
            <hr />
            <Grid container spacing={6}>
                {currentItems.map((company) => (
                    <CompanyPageCard key={company.companyId} company={company} />
                ))}
            </Grid>
            <Box
                position="relative"
                top={50}
                left="50%"
                transform="translateX(-50%)"
                maxWidth={400}
            >
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </Box>
        </div>
    );
};

export default Companies;
