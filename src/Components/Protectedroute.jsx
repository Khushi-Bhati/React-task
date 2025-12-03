import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet , Navigate } from 'react-router-dom';



function Protectedroute() {
    const auth=useSelector(state=>state.userRed.loggedin)
  return (
    auth?<Outlet/>:<Navigate to={"/"}/>
  )
}

export default Protectedroute;


