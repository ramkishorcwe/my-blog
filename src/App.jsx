import { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Header from './components/header/header';
import Footer from './components/footer/footer';
// import config from './environmentConfig';
import Container from './components/utils/container';
import { Home } from './components';
import { userStatus } from '../../store/auth-reducer'
import RouterConfig from './components/router-config/route';


function App() {
  let authState = useSelector((state) => state.authState)
  // const blogState = useSelector((state) => state.blogState)
  const [theme, setTheme] = useState(true);
  // console.log(authState, blogState);
  function updateTheme() {
    console.log("Hello")
    setTheme(!theme)
  }
  console.log(authState)

  useEffect(() => {
    (async () => {
      // const data1 = await auth.register("rkishor@okruti.com", "12345678")
      const userData = await authService.getUser()
      if (userData) dispatch(userStatus({ userData: userData, status: true }));
      console.log(data)
    })();

  }, [])

  return (
    <>
      <Container {...{ theme }}>
        {/* <Header {...{ theme, updateTheme }} /> */}
        {/* <Login /> */}
        {/* {authState.status ? <Home /> : <Register />} */}
        {/* <Home /> */}
        {/* <CreateBlog /> */}
        {/* <AboutUs /> */}
        {/* <BrowserRouter>
          // <RouteSetup />
        </BrowserRouter> */}
        {/* <Footer /> */}
        <RouterConfig />
      </Container>

    </>
  )
}

export default App
