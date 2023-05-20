import axios from 'axios';

import { addAuthHeader } from './addAuthHeader';

const apiService = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

// Request interceptor to add the header to each request
// apiService.interceptors.request.use(addAuthHeader);

// Fetch the current user
export const createUser = async (idToken) => {
    const response = await apiService.get('/me',
        {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
    return response.data;
};

// Fetch the list of companies
export const fetchCompanies = async (idToken) => {
    const response = await apiService.get('/companies',
        {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        ;
    return response.data;
};

// Add a new company
export const addCompany = async (companyData) => {
    const response = await apiService.post('/companies', companyData);
    return response.data;
};

// Update an existing company
export const updateCompany = async (companyId, companyData, idToken) => {
    const response = await apiService.put(`/companies/${companyId}`, companyData,
        {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
    return response.data;
};

// Delete a company
export const deleteCompany = async (companyId) => {
    const response = await apiService.delete(`/companies/${companyId}`);
    return response.data;
};

export default apiService;