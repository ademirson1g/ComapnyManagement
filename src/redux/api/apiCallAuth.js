import jwtDecode from 'jwt-decode';

import { clearAuthToken, getAuthToken } from '../utils/queryParamUtils';
import { persistor } from '../store/store';

export const checkAuth = () => {
    const idToken = getAuthToken();

    if (!idToken) {
        clearAuthToken();
        persistor.purge()
        return false;
    }

    try {
        const token = jwtDecode(idToken);
        const timestamp = Math.floor(Date.now() / 1000);

        if (timestamp > token.exp) {
            clearAuthToken();
            persistor.purge()
            return false;
        }

        return true;
    } catch (e) {
        clearAuthToken();
        persistor.purge()
        return false;
    }
};
