import { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Header from './components/header/header';
import Footer from './components/footer/footer';
// import config from './environmentConfig';
import auth from './appwrite/auth';
import Container from './components/utils/container';
import { Login, Register } from './components';



function App() {
  // let authState = useSelector((state) => state.authState)
  const blogState = useSelector((state) => state.blogState)
  const [theme, setTheme] = useState(true);
  // console.log(authState, blogState);
  const updateTheme = () => {
    setTheme(!theme)
  }


  // useEffect(() => {
  //   (async () => {
  //     const data1 = await auth.register("rkishor@okruti.com", "12345678")
  //     const data = await auth.getUser()
  //     console.log(data1, data)
  //   })()

  // }, [])

  return (
    <>
      <Container {...{ theme }}>
        <Header {...{ theme, updateTheme }} />
        {/* <Login /> */}
        <Register />
        <Footer />
      </Container>

    </>
  )
}

export default App
