import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { DragDropContext } from 'react-beautiful-dnd'
import { useNavigate } from 'react-router'

import { BACK } from '../../atoms/TextExports/TextExports'
import DraggableHeader from './DraggableHeader'
import ReusableButton from '../../atoms/Buttons/ReusableButton'

const DraggableCompanies = () => {
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    const [columns, setColumns] = useState([
        {
            title: 'Companies',
            droppableId: 'companies',
            items: useSelector((state) => state.companies.items),
        },
        {
            title: 'Dragged Companies',
            droppableId: 'draggedCompanies',
            items: [],
        },
    ])

    const handleDragEnd = (result) => {
        const { source, destination } = result

        // If dropped outside of a valid droppable area
        if (!destination) {
            return
        }

        // If dropped in the same droppable area and at the same index
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return
        }

        // Get the dragged item
        const draggedItem = columns.find(
            (column) => column.droppableId === source.droppableId
        ).items[source.index]

        // Remove the dragged item from the source column
        const newColumns = columns.map((column) => {
            if (column.droppableId === source.droppableId) {
                return {
                    ...column,
                    items: column.items.filter((item, index) => index !== source.index),
                }
            }
            return column
        })

        // Add the dragged item to the destination column
        newColumns.forEach((column, index) => {
            if (column.droppableId === destination.droppableId) {
                column.items.splice(destination.index, 0, draggedItem)
            }
        })
        setColumns(newColumns)
    }

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div style={{ marginTop: '60px', marginLeft: '10px', marginRight: '10px' }}>
            {isAuthenticated && (
                <>
                    <ReusableButton onClick={handleBack} style={{ marginBottom: '50px' }}>
                        {BACK}
                    </ReusableButton>
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Grid container spacing={1}>
                            <DraggableHeader columns={columns} setColumns={setColumns} />
                        </Grid>
                    </DragDropContext>
                </>
            )}
        </div>
    )
}

export default DraggableCompanies
