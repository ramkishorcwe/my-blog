
import React, { useEffect } from 'react'
import { Routes, Route, createBrowserRouter } from "react-router";
import { Home, About, AboutUs } from '../index'
import { login as authLogin } from '../../store/auth-reducer';  //todo
import { useNavigate } from 'react-router';
import { userStatus } from '../../store/auth-reducer'  //todo
import { useDispatch, useSelector } from 'react-redux';

const RouteSetup = () => {
  // TODO
  //  when use this component then uncomment below code
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   (async () => {
  //     const userData = await authService.getUser()
  //     if (userData) {
  //       dispatch(authLogin({ userData: userData, status: true }));
  //     }
  //     else {
  //       navigate('/login')
  //     }
  //   })();
  // }, [])
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




