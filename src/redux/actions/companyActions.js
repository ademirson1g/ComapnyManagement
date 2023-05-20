import { fetchCompanies, addCompany, updateCompany, deleteCompany } from '../api/apiService';
import { ADD_COMPANY, DELETE_COMPANY, FETCH_COMPANIES, UPDATE_COMPANY } from '../reducers/reducerExports/reducerExports';

export const fetchCompaniesAction = () => {
    return async (dispatch, getState) => {
        const { idToken } = getState().auth;
        try {
            const companies = await fetchCompanies(idToken);
            dispatch({
                type: FETCH_COMPANIES,
                payload: companies,
            });
        } catch (error) {
            console.error(error);
        }
    };
};

export const addCompanyAction = (companyData) => {
    return async (dispatch) => {
        try {
            const newCompany = await addCompany(companyData);
            dispatch({
                type: ADD_COMPANY,
                payload: newCompany,
            });
        } catch (error) {
            console.error(error);
        }
    };
};

export const updateCompanyAction = (companyId, companyData) => {
    return async (dispatch) => {
        try {
            const updatedCompany = await updateCompany(companyId, companyData);
            dispatch({
                type: UPDATE_COMPANY,
                payload: updatedCompany,
            });
        } catch (error) {
            console.error(error);
        }
    };
};

export const deleteCompanyAction = (companyId) => {
    return async (dispatch) => {
        try {
            await deleteCompany(companyId);
            dispatch({
                type: DELETE_COMPANY,
                payload: companyId,
            });
        } catch (error) {
            console.error(error);
        }
    };
};
