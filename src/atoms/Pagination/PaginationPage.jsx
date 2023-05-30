import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from '@mui/material'

import { NO_COMPANIES_FOUND } from '../TextExports/TextExports'

const PaginationPage = ({ pageCount, pageIndex, onChange }) => {
    return (
        <>
            {pageCount === 0 ? (
                <p>{NO_COMPANIES_FOUND}</p>
            ) : (
                <Pagination
                    count={pageCount}
                    page={pageIndex}
                    onChange={onChange}
                    color='primary'
                    shape='rounded'
                />
            )}
        </>
    )
}

PaginationPage.propTypes = {
    onChange: PropTypes.func,
    pageCount: PropTypes.number,
    pageIndex: PropTypes.number
}

export default PaginationPage
