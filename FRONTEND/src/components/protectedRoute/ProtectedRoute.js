
import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

function ProtectedRoute() {
    //* Here add the logic of access the global auth token from redux 
    let auth={'token':true}
  return (
        auth.token?<Outlet/>:<Navigate to='/login'/>
    )
}

export default ProtectedRoute