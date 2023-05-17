import React, { Fragment } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from "../../molecules/Homepage/HomePage"
import Navbar from "../../molecules/Navbar/Navbar"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Fragment>
                        <Navbar />
                        <HomePage />
                    </Fragment>
                }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes