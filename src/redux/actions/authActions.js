import axios from 'axios'

import { LOGIN, LOGOUT } from '../reducers/reducerExports'

export const login = (idToken) => {
    return async (dispatch) => {
        try {
            // Set Authorization header with idToken
            axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`

            // Call the /me endpoint to create the user or validate the existing user
            await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/me`)

            // Dispatch the login action with the idToken
            dispatch({
                type: LOGIN,
                payload: {
                    idToken
                },
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export const logout = () => ({
    type: LOGOUT
})
