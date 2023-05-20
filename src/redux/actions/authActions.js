import axios from 'axios'

import { LOGIN, LOGOUT } from '../reducers/reducerExports/reducerExports'
import { createUser } from '../api/apiService';
import { updateQueryParams } from '../utils/queryParamUtils';

export const login = (idToken) => {
    return async (dispatch) => {
        try {
            await createUser(idToken)
            dispatch({
                type: LOGIN,
                payload: idToken,
            });
            updateQueryParams(idToken);
        } catch (error) {
            console.error(error);
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        // Later refactor
        delete axios.defaults.headers.common['Authorization'];
        dispatch({ type: LOGOUT });
    };
};