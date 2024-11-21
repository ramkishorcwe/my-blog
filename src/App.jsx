import './App.css';
import { useSelector } from 'react-redux';


function App() {
  let authState = useSelector((state) => state.authState)
  const blogState = useSelector((state) => state.blogState)
  console.log(authState, blogState)
  return (
    <>
      store title : {`${blogState.title}`}
    </>
  )
}

export default App
