import Blog from "../blogs-list/blogs";
import Button from "../utils/button";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import authService from '../../appwrite/auth'
import database from '../../appwrite/blog'
import { login as authLogin } from '../../store/auth-reducer'


const Home = () => {
  // const userAuth = useSelector((store) => store.authState.status);
  const navigate = useNavigate();
  const [blogsList, setBlogsList] = useState([]);
  const dispatch = useDispatch();

  const userLoginStatus = async () => {
    try {
      const user = await authService.getUser()
      if (!user) {
        navigate('/login')
      } else {
        dispatch(authLogin({ userData: user, status: true }))
      }

    } catch (error) {
      console.log(error)
    }
  }
  const fetchData = async () => {
    try {
      const blogList = await database.listBlog()
      setBlogsList(blogList.documents);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    userLoginStatus()
    fetchData()
  }, [])
  const createProps = (blog) => {
    return {
      ...blog, key: blog.title
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 10 }}>
        <h1>My Blogs</h1>
        <Button {...{ styles: { width: 100, height: 24 } }}>{<PlusCircleOutlined />}</Button>
      </div>
      <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center", gap: 20 }}>
        {blogsList.map((blog) => <Blog {...createProps(blog)} />)}
      </div>
    </div>
  )
}

export default Home