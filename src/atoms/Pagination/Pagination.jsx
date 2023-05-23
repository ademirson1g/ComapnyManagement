import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <Button
                    key={i}
                    variant={i === currentPage ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => handlePageChange(i)}
                    disabled={i === currentPage}
                >
                    {i}
                </Button>
            );
        }
        return pageNumbers;
    };

    if (totalPages <= 1) {
        return null
    }

    return <ButtonGroup>{renderPageNumbers()}</ButtonGroup>;
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
