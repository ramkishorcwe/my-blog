
import React, { useEffect } from 'react'
import { Routes, Route, createBrowserRouter } from "react-router";
import { Home, About, AboutUs } from '../index'
import { useNavigate } from 'react-router';
import { userStatus } from '../../store/auth-reducer'
import { useDispatch, useSelector } from 'react-redux';
// import ReactDOM from "react-dom/client";

//TODO

// import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
// import React, { Suspense, lazy } from "react";
// import {
//   dashboard,
//   homePath,
//   loginPath,
//   rootPath
// } from "./routePaths";

// import Loader from "../components/loader";
// import ProtectedRoute from "./protectedRoute";



const RouteSetup = () => {

//   const navigate = useNavigate();
//   useEffect(async () => {
//     try {
//       const user = await authService.getUser()
//       if (user)
//         dispatch(authLogin({ userData: user, status: true }))
//       else
//         navigate('/')
//     } catch (error) {
//       console.log(error)
//     }
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      // const data1 = await auth.register("rkishor@okruti.com", "12345678")
      const userData = await authService.getUser()
      if (userData) dispatch(userStatus({ userData: userData, status: true }));
      console.log(data)
    })();

  }, [])
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about-us',
          element: <AboutUs />
        },
        {
          path: '/about-us',
          element: <AboutUs />
        },
        {
          path: '/about-us',
          element: <AboutUs />
        },
      ]
    }

  ])
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      {/* <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route> */}
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>

  )
}

export default RouteSetup



