import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from "../../molecules/Homepage/HomePage"
import Navbar from "../../molecules/Navbar/Navbar"
import CompanyPageAdd from "../../molecules/Company/CompanyPageAdd"
import CompanyPageEdit from "../../molecules/Company/CompanyPageEdit"
import DraggableCompanies from "../../molecules/DraggableCompanies/DraggableCompanies"
import NoPageFound from "../../atoms/NoPageFound/NoPageFound"
import ExpandableText from "../../atoms/ExpandableText/ExpandableText"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<CompanyPageAdd />} />
                <Route path="/edit" element={<CompanyPageEdit />} />
                <Route path="/draggable_companies" element={<DraggableCompanies />} />
                <Route path="/expandable_text" element={<ExpandableText />} />
                <Route
                    path="*"
                    element={
                        <NoPageFound />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes