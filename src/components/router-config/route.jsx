
// import React, { useEffect } from 'react'
// import { Routes, Route, createBrowserRouter } from "react-router";
// import { Home, About, AboutUs } from '../index'
// import { login as authLogin } from '../../store/auth-reducer';  //todo
// import { useNavigate } from 'react-router';
// import { userStatus } from '../../store/auth-reducer'  //todo
// import { useDispatch, useSelector } from 'react-redux';

// const RouteSetup = () => {
//   // TODO
//   //  when use this component then uncomment below code
//   // const navigate = useNavigate();
//   // const dispatch = useDispatch();
//   // useEffect(() => {
//   //   (async () => {
//   //     const userData = await authService.getUser()
//   //     if (userData) {
//   //       dispatch(authLogin({ userData: userData, status: true }));
//   //     }
//   //     else {
//   //       navigate('/login')
//   //     }
//   //   })();
//   // }, [])
//   const route = createBrowserRouter([
//     {
//       path: '/',
//       element: <Home />,
//       children: [
//         {
//           path: '/',
//           element: <Home />
//         },
//         {
//           path: '/about-us',
//           element: <AboutUs />
//         },
//         {
//           path: '/about-us',
//           element: <AboutUs />
//         },
//         {
//           path: '/about-us',
//           element: <AboutUs />
//         },
//       ]
//     }

//   ])
//   return (
//     <Routes>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />

//       <Route element={<AuthLayout />}>
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//       </Route>
//       {/* <Route path="concerts">
//         <Route index element={<ConcertsHome />} />
//         <Route path=":city" element={<City />} />
//         <Route path="trending" element={<Trending />} />
//       </Route> */}
//       <Route path="dashboard" element={<Dashboard />}>
//         <Route index element={<Home />} />
//         <Route path="settings" element={<Settings />} />
//       </Route>
//     </Routes>

//   )
// }



// Fresh Code

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { home, createBlog, about, login, register } from "./routerpath";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx"
// import { Footer } from "antd/es/layout/layout.js";
// import { Header } from "antd/es/layout/layout.js";
// import Loader from "../components/loader";
// import ProtectedRoute from "./protectedRoute";

// import route paths
// import { createBrowserRouter, RouterProvider } from 'react-router'
const importComponentByLazyLoading = (componentName) => {
  return React.lazy(() =>
    import('../index.js').then((module) => ({ default: module[componentName] }))
  )
}

const LoginComponent = importComponentByLazyLoading("Login")
const HomeComponent = importComponentByLazyLoading("Home");
const AboutUsComponent = importComponentByLazyLoading("AboutUs");
const RegisterComponent = importComponentByLazyLoading("Register");
const CreateBlogComponent = importComponentByLazyLoading("CreateBlog");
import { Spin } from "antd";
// const RouteNotFoundComponent = lazy(() => import("../pages/pageNotFound"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<Spin />}>
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<><Header /><Outlet /><Footer /></>}>
            {/* <Route index element={<HomeComponent />} /> */}
            <Route path={home} element={<HomeComponent />} />
            <Route path={about} element={<AboutUsComponent />} />
            <Route path={createBlog} element={<CreateBlogComponent />} />
            {/* <Route element={<ProtectedRoute />}>
              <Route path={homePath} element={<HomeComponent />} />
              <Route path={dashboard} element={<AboutUsComponent />} />
            </Route> */}
            <Route path="*" element={<>Error</>} />
          </Route>
          <Route path={login} element={<LoginComponent />} />
          <Route path={register} element={<RegisterComponent />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RouterConfig;




