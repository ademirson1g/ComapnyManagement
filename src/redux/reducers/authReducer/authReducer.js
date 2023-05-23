import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { LOGIN, LOGOUT } from "../reducerExports/reducerExports"

const initialState = {
    isAuthenticated: null,
    idToken: null
}

const authPersistConfig = {
    key: 'auth',
    storage,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            const { payload } = action
            return {
                ...state,
                isAuthenticated: true,
                idToken: payload,
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                idToken: null,
            }
        default:
            return state
    }
}

export default persistReducer(authPersistConfig, authReducer)
