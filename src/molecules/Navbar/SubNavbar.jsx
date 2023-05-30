import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { InputBase, IconButton, Box } from '@mui/material'
import { FaSearch, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useDebounce } from '../../hooks/useDebounce'
import { fetchCompaniesAction } from '../../redux/actions/companyActions'
import { useSelector } from 'react-redux'

const SubNavbar = ({ isAuth }) => {
    const dispatch = useDispatch()
    const [searchCompanyTerm, setSearchCompanyTerm] = useState('')
    const debouncedSearchCompanyTerm = useDebounce(searchCompanyTerm, 500)

    const handleSearchInputChange = (event) => {
        setSearchCompanyTerm(event.target.value)
    }

    useEffect(() => {
        if (isAuth) {
            dispatch(fetchCompaniesAction(debouncedSearchCompanyTerm));
        }
    }, [debouncedSearchCompanyTerm]);

    return (
        <div>
            {isAuth && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: '1px solid black',
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                        padding: '15px',
                        backgroundColor: 'white',
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <InputBase
                            placeholder="Search Company"
                            value={searchCompanyTerm}
                            onChange={handleSearchInputChange}
                            endAdornment={<FaSearch />}
                            sx={{ border: '1px solid black', borderRadius: '15px', padding: '4px 8px' }}
                        />
                    </Box>
                    <Link to="/add">
                        <IconButton
                            sx={{
                                borderRadius: '50%',
                                border: '2px solid black',
                                padding: '8px',
                            }}
                        >
                            <FaPlus />
                        </IconButton>
                    </Link>
                </Box>
            )}
        </div>
    )
}

SubNavbar.propTypes = {
    isAuthenticateds: PropTypes.bool,
    isAuth: PropTypes.bool
}

export default SubNavbar
