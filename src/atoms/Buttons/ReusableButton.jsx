import React from 'react';
import PropTypes from 'prop-types'
import { Button } from '@mui/material';

const ReusableButton = ({ onClick, children, startIcon, variant, style, size }) => {
    return (
        <Button
            size={size}
            startIcon={startIcon}
            sx={{
                borderRadius: '15px',
                top: "20px",
                textTransform: 'none',
                fontWeight: 'bold',
                border: '1px solid black',
                display: 'flex',
                color: "black"
            }}
            onClick={onClick}
            variant={variant}
            style={style}
        >
            {children}
        </Button>
    );
}

ReusableButton.propTypes = {
    onClick: PropTypes.func,
}

export default ReusableButton;
