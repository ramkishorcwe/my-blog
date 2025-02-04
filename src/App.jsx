import { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
// import config from './environmentConfig';
import Container from './components/utils/container';
import { userStatus } from '../../store/auth-reducer'
import RouterConfig from './components/router-config/route';


function App() {
  let authState = useSelector((state) => state.authState)
  // const blogState = useSelector((state) => state.blogState)
  const [theme, setTheme] = useState(true);
  // console.log(authState, blogState);
  // function updateTheme() {
  //   setTheme(!theme)
  // }
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
        <RouterConfig />
      </Container>

    </>
  )
}

export default App
