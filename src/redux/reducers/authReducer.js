import { LOGIN, LOGOUT } from "./reducerExports"

const initialState = {
    isAuthenticated: false,
    idToken: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                idToken: action.payload,

            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                idToken: null
            }
        default:
            return state
    }
}

export default authReducer
