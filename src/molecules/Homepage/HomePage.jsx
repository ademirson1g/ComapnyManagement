import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../redux/actions/authActions'
import GoogleButton from '../../atoms/Buttons/GoogleButton'

const Homepage = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    const { signIn } = useGoogleLogin({
        clientId: import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID,
    })

    const handleSignIn = async () => {
        const googleUser = await signIn()
        const idToken = googleUser.tokenId
        dispatch(login(idToken))
    }

    return (
        <GoogleButton
            isAuthenticated={isAuthenticated}
            handleSignIn={handleSignIn}
        />
    )
}

export default Homepage

