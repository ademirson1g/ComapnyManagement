import React from 'react';
import PropTypes from 'prop-types';

import { Droppable } from 'react-beautiful-dnd';
import { Grid, Typography, Divider } from '@mui/material';

import DraggableItem from '../../atoms/DraggableCompanies/DraggableItem';

const DraggableColumn = ({ title, droppableId, items }) => {
    return (
        <Grid item xs={12} sm={6}>
            <Typography variant="h5" align="center" style={{ marginBottom: '10px' }}>{title}</Typography>
            <Divider />
            <Droppable droppableId={droppableId}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{
                            border: `2px dashed ${snapshot.isDraggingOver ? 'blue' : 'gray'}`,
                            margin: '10px',
                            padding: '10px',
                            backgroundColor: snapshot.isDraggingOver ? '#f0f0f0' : 'transparent',
                        }}
                    >
                        {items.map((item, index) => (
                            <DraggableItem key={item.companyId} item={item} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Grid>
    );
};

DraggableColumn.propTypes = {
    droppableId: PropTypes.string,
    items: PropTypes.array,
    title: PropTypes.string
}

export default DraggableColumn;
