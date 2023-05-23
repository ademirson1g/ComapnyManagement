import React from 'react';
import { Grid } from '@mui/material';

import DraggableColumn from './DraggableColumn';

const DraggableHeader = ({ columns }) => {
    return (
        <Grid container spacing={1}>
            {columns.map((column, index) => (
                <DraggableColumn
                    key={column.droppableId}
                    title={column.title}
                    droppableId={column.droppableId}
                    items={column.items}
                    isLastColumn={index === columns.length - 1}
                />
            ))}
        </Grid>
    );
};

export default DraggableHeader;
