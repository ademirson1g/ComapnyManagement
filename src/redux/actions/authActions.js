import { LOGIN, LOGOUT } from '../reducers/reducerExports/reducerExports'
import { createUser } from '../api/apiService'
import { clearAuthToken, setAuthToken } from '../utils/queryParamUtils'
import { persistor } from '../store/store'
import { LOGIN_FAILED } from '../../atoms/TextExports/TextExports';

export const login = (idToken) => {
    setAuthToken(idToken);
    return async (dispatch) => {
        try {
            await createUser(idToken);
            dispatch({
                type: LOGIN,
                payload: idToken,
            });
            persistor.persist();
        } catch (error) {
            alert(LOGIN_FAILED);
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT })
        clearAuthToken()
        persistor.purge()
    }
}