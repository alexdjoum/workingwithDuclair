import React from 'react'
import { Navigate, Route } from "react-router-dom"
import { isAuthenticated } from './helpers/auth'

const UserRoute = ({ children }) => {
    let auth = isAuthenticated()
    console.log('auth ----', auth)
  return auth ? children : <Navigate to= "/"/>

}

export default UserRoute