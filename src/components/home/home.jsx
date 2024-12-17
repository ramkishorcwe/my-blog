import Blog from "../blogs-list/blogs";
import Button from "../utils/button";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import authService from '../../appwrite/auth'
import database from '../../appwrite/blog'

const Home = () => {
  const userAuth = useSelector((store) => store.authState.status);
  const navigate = useNavigate();
  const [blogsList, setBlogsList] = useState([]);
  const blogs = [
    {
      title: "Understanding React Hooks",
      featuredImage: "https://via.placeholder.com/400x200?text=React+Hooks", // Remote image
      content: "<p>A comprehensive guide to using React Hooks effectively in functional components. Learn useState, useEffect, and custom hooks.</p>",
    },
    {
      title: "Mastering JavaScript ES6+ Features",
      featuredImage: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "<p>A comprehensive guide to using React Hooks effectively in functional components. Learn useState, useEffect, and custom hooks.</p>",
    },
    {
      title: "Building Responsive Websites with CSS Grid",
      featuredImage: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "<p>A comprehensive guide to using React Hooks effectively in functional components. Learn useState, useEffect, and custom hooks.</p>",
    },
    {
      title: "State Management with Redux Toolkit",
      featuredImage: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "<p>A comprehensive guide to using React Hooks effectively in functional components. Learn useState, useEffect, and custom hooks.</p>",
    },
    {
      title: "Deploying Applications with Vercel",
      featuredImage: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "<p>A comprehensive guide to using React Hooks effectively in functional components. Learn useState, useEffect, and custom hooks.</p>",
    },
  ];
  console.log(userAuth);

  const userLoginStatus = async () => {
    try {
      const user = await authService.getUser()
      if (!user) {
        navigate('/login')
      }

    } catch (error) {
      console.log(error)
      navigate('/login')
    }
  }
  const fetchData = async () => {
    try {
      const blogList = await database.listBlog()
      console.log(blogList)
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