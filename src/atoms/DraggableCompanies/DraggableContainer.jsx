import React from 'react';
import PropTypes from 'prop-types'

import { Grid } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

import DraggableHeader from './DraggableHeader';

const DraggableContainer = ({ handleDragEnd, columns }) => {
    return (
        <div style={{ marginTop: '60px', marginLeft: '10px', marginRight: '10px' }}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Grid container spacing={1}>
                    <DraggableHeader columns={columns} />
                </Grid>
            </DragDropContext>
        </div>
    );
};

DraggableContainer.propTypes = {
    handleDragEnd: PropTypes.func,
    columns: PropTypes.array
}

export default DraggableContainer