import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { home, createBlog, about, login, register } from "./routerpath";
import { Spin } from "antd";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx"

const LoginComponent = lazy(() => import("../login/login"));
const HomeComponent = lazy(() => import("../home/home"));
const AboutUsComponent = lazy(() => import("../about-us/about-us"));
const RegisterComponent = lazy(() => import("../register/register"));
const CreateBlogComponent = lazy(() => import("../blog/create-blog/create-blog"));
const ProjectsListPage = lazy(() => import("../project/projects-list"));
const ProfileComponent = lazy(() => import('../user-profile/profile'));
const BlogDescription = lazy(() => import('../blog/blog-description/blog-description'));
const Project = lazy(() => import('../project/project.jsx'));

const RouterConfig = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<><Header /><Outlet style={{ minHeight: "70vh" }} /><Footer /></>}>
            {/* <Route index element={<HomeComponent />} /> */}
            <Route path={home} element={<HomeComponent />} />
            <Route path={about} element={<AboutUsComponent />} />
            <Route path={createBlog} element={<CreateBlogComponent />} />
            <Route path={"blog/:id"} element={<BlogDescription />} />
            <Route path={"project/"} element={<ProjectsListPage />} />
            <Route path={"profile/"} element={<ProfileComponent />} />
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

// function ProtectedRoute({ children }) {
//   const navigate = useNavigate();
//   const isAuthenticated = false; // Replace with your authentication logic  


function renderLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#020618]">
      <Spin size="large" />
    </div>
  )
}


