
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'

function ProtectedRoute() {
    const {token}=useSelector((state)=>state.auth);
    // console.log("Token exist=>",token)
    //* Here add the logic of access the global auth token from redux 
    let auth={'token':token}
    // console.log(auth.token)
    
  return (
        auth.token?<Outlet/>:<Navigate to='/login'/>
    )
}

export default ProtectedRoute