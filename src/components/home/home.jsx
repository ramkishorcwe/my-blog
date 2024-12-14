import Blog from "../blogs-list/blogs";
import Button from "../utils/button";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import authService from '../../appwrite/auth'

const Home = () => {
  const userAuth = useSelector((store) => store.authState.status);
  const navigate = useNavigate();
  const blogs = [
    {
      title: "Understanding React Hooks",
      img: "https://via.placeholder.com/400x200?text=React+Hooks", // Remote image
      description: "A comprehensive guide to using React Hooks effectively in functional components. Learn useState, useEffect, and custom hooks.",
    },
    {
      title: "Mastering JavaScript ES6+ Features",
      img: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Explore the latest JavaScript features, including arrow functions, destructuring, and template literals, to write cleaner, modern code.",
    },
    {
      title: "Building Responsive Websites with CSS Grid",
      img: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Learn how to create fully responsive layouts using CSS Grid. Includes real-world examples and tips for best practices.",
    },
    {
      title: "State Management with Redux Toolkit",
      img: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Simplify state management in React applications with Redux Toolkit. Get started with slices, reducers, and asynchronous actions.",
    },
    {
      title: "Deploying Applications with Vercel",
      img: "https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "A step-by-step guide to deploying React applications on Vercel. Learn how to set up your project and configure CI/CD.",
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

  useEffect(() => {
    // if (userAuth === false) {
    //   navigate('/login')
    // }
    userLoginStatus()
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
        {blogs.map((blog) => <Blog {...createProps(blog)} />)}
      </div>
    </div>
  )
}

export default Home