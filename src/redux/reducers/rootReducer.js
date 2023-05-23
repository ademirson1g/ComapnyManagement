import { combineReducers } from 'redux'

import authReducer from './authReducer/authReducer'
import companyReducer from './companyReducer/companyReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    companies: companyReducer
})

export default rootReducer
