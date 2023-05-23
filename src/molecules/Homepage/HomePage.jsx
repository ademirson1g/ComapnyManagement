import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'
import { useDispatch } from 'react-redux'

import { login } from '../../redux/actions/authActions'
import HomePageLogin from './HomePageLogin'
import { checkAuth } from '../../redux/api/apiCallAuth'

const Homepage = () => {
    const dispatch = useDispatch()
    const isAuthenticated = checkAuth()

    const { signIn } = useGoogleLogin({
        clientId: import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID,
    })

    const handleSignIn = async () => {
        const googleUser = await signIn()
        const idToken = googleUser.tokenId
        dispatch(login(idToken))
    }

    return (
        <HomePageLogin
            isAuthenticated={isAuthenticated}
            handleSignIn={handleSignIn}
        />
    )
}

export default Homepage

