import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { AboutUs, CreateBlog, Home, Login, Register } from './components/index.js'
import Footer from './components/footer/footer.jsx'
import store from './store/store.js'
import './index.css'
import Header from './components/header/header.jsx'



const router = createBrowserRouter([
  {
    // path: '/',
    // element: <App />,
    // children: [
    // {
    path: '/',
    element: <><Header /><Home /><Footer /></>
  },
  {
    path: '/about-us',
    element: <><Header /><AboutUs /><Footer /></>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/articles',
    element: <CreateBlog />
  },

  {
    path: '/register',
    element: <Register />
  }

])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>)
