import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

import DraggableColumn from '../../molecules/DraggableCompanies/DraggableColumn';

const DraggableHeader = ({ columns }) => {
    return (
        <Grid container spacing={1}>
            {columns.map((column, index) => (
                <DraggableColumn
                    key={column.droppableId}
                    title={column.title}
                    droppableId={column.droppableId}
                    items={column.items}
                />
            ))}
        </Grid>
    );
};

DraggableHeader.propTypes = {
    columns: PropTypes.array
}

export default DraggableHeader;
