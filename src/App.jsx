import { useEffect } from 'react';
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
  // console.log(authState, blogState);


  // useEffect(() => {
  //   (async () => {
  //     const data1 = await auth.register("rkishor@okruti.com", "12345678")
  //     const data = await auth.getUser()
  //     console.log(data1, data)
  //   })()

  // }, [])

  return (
    <>
      <Header />
      {/* <Login /> */}
      <Register />
      <Footer />
    </>
  )
}

export default App
