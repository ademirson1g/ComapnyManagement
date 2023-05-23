import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'
import { useDispatch } from 'react-redux'

import { login } from '../../redux/actions/authActions'
import HomePageLogin from './HomePageLogin'
import { useSelector } from 'react-redux'

const Homepage = () => {
    const dispatch = useDispatch()

    const isAuth = useSelector((state => state.auth.isAuthenticated))

    const { signIn } = useGoogleLogin({
        clientId: import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID,
    })

    const handleSignIn = async () => {
        const googleUser = await signIn()
        const idToken = googleUser.tokenId
        dispatch(login(idToken))
    }

    return (
        <div>
            <HomePageLogin
                isAuth={isAuth}
                handleSignIn={handleSignIn}
            />
        </div>

    )
}

export default Homepage

