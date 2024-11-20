import './App.css';
import { useSelector } from 'react-redux';


function App() {
  const title = useSelector((state) => state.blog.title)
  return (
    <>
      store title : {title}
    </>
  )
}

export default App
