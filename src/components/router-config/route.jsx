import { BrowserRouter, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import { home, createBlog, about, login, register } from "./routerpath";
import { Spin } from "antd";
import Project from "../project/project.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx"
import BlogDescription from "../blog/blog-description/blog-description.jsx";
import ProjectsListPage from '../project/projects-list.jsx'
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

// const RouteNotFoundComponent = lazy(() => import("../pages/pageNotFound"));

const RouterConfig = () => {

  return (
    <Suspense fallback={<Spin />}>
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<><Header /><Outlet style={{ minHeight: "70vh" }} /><Footer /></>}>
            {/* <Route index element={<HomeComponent />} /> */}
            <Route path={home} element={<HomeComponent />} />
            <Route path={about} element={<AboutUsComponent />} />
            <Route path={createBlog} element={<CreateBlogComponent />} />
            <Route path={"blog/:id"} element={<BlogDescription />} />
            <Route path={"project/"} element={<ProjectsListPage />} />
            <Route path={"project/:id"} element={<Project />} />
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




