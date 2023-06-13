import { Outlet, Navigate } from 'react-router-dom'
import React, { useContext } from 'react';

function PrivateRoutes() {
  const auth = localStorage.getItem("auth") === "true";
    return (
        auth ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes
