import React from 'react'

import AppRoutes from './organism/Routes/AppRoutes'

const GoogleAuthContext = React.createContext()

function App() {

  return (
    <GoogleAuthContext.Provider value={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}>
      <AppRoutes />
    </GoogleAuthContext.Provider>
  )
}

export default App
