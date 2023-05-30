import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import DraggableItemName from './DraggableItemName';

const DraggableItem = ({ item, index }) => {
    return (
        <Draggable
            key={item.companyId}
            draggableId={item.companyId}
            index={index}
        >
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <DraggableItemName company={item} />
                </div>
            )}
        </Draggable>
    );
};

DraggableItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number
}

export default DraggableItem;
