import { LOGIN, LOGOUT } from "../reducerExports/reducerExports";
import { getQueryParameter, updateQueryParameter, deleteQueryParameter } from "../../utils/queryParamUtils";

const isAuthenticated = getQueryParameter('isAuthenticated') === 'true';
const idToken = getQueryParameter('idToken');

const authReducer = (state = { isAuthenticated, idToken }, action) => {
    switch (action.type) {
        case LOGIN:
            const { payload } = action;
            updateQueryParameter('isAuthenticated', 'true');
            updateQueryParameter('idToken', payload);
            return {
                ...state,
                isAuthenticated: true,
                idToken: payload,
            };
        case LOGOUT:
            deleteQueryParameter('isAuthenticated');
            deleteQueryParameter('idToken');
            return {
                ...state,
                isAuthenticated: false,
                idToken: null,
            };
        default:
            return state;
    }
};

export default authReducer;
