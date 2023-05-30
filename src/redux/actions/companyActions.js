import { ERROR_MESSAGE, REQUIRED_FIELD } from '../../atoms/TextExports/TextExports'
import { validationSchema } from '../../schemas/validationSchema'
import { fetchCompanies, addCompany, updateCompany, deleteCompany, fetchCompanyById } from '../api/apiService'
import { ADD_COMPANY, DELETE_COMPANY, FETCH_COMPANIES, FETCH_COMPANIES_PENDING, FETCH_COMPANY_BY_ID, UPDATE_COMPANY } from '../reducers/reducerExports/reducerExports'

export const fetchCompaniesAction = (search, pageIndex, pageSize) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_COMPANIES_PENDING })
            const companies = await fetchCompanies(search, pageIndex, pageSize);
            dispatch({
                type: FETCH_COMPANIES,
                payload: companies,
            });
        } catch (error) {
            throw new Error(ERROR_MESSAGE);
        }
    };
};

export const fetchCompanyByIdAction = (companyId) => {
    return async (dispatch) => {
        try {
            const company = await fetchCompanyById(companyId)
            dispatch({
                type: FETCH_COMPANY_BY_ID,
                payload: company
            })
        } catch (error) {
            throw new Error(ERROR_MESSAGE)
        }
    }
}

export const addCompanyAction = (companyData) => {
    return async (dispatch) => {
        await validationSchema.validate({ companyName: companyData.companyName })
        try {
            const newCompany = await addCompany(companyData)
            dispatch({
                type: ADD_COMPANY,
                payload: newCompany
            })
        } catch (error) {
            throw new Error(ERROR_MESSAGE)
        }
    }
}

export const updateCompanyAction = (companyId, companyData) => {
    return async (dispatch) => {
        try {
            const updatedCompany = await updateCompany(companyId, companyData)
            await validationSchema.validate({ companyName: companyData.companyName })
            dispatch({
                type: UPDATE_COMPANY,
                payload: updatedCompany,
            })
        } catch (error) {
            throw new Error(REQUIRED_FIELD)
        }
    }
}

export const deleteCompanyAction = (companyId) => {
    return async (dispatch) => {
        try {
            await deleteCompany(companyId)
            dispatch({
                type: DELETE_COMPANY,
                payload: companyId
            })
        } catch (error) {
            throw new Error(ERROR_MESSAGE)
        }
    }
}
