import React from 'react'
import { useAuthContext } from '../contexts/authContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequiresAuth = () => {
    const {authState} = useAuthContext();
    const location = useLocation();
  return authState?.token ? (<Outlet/>) :(<Navigate to="/register" state={{from:location}} replace/>)
}
