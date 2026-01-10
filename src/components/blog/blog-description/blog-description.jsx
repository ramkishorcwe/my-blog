// import { Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { Box, Typography } from "@mui/material";
// import auth from '../../appwrite/auth';
import blog from '../../../appwrite/blog';
import HTMLReactParser from 'html-react-parser/lib/index';


const BlogDescription = () => {
  const location = useLocation();
  const path = location.pathname.split("/")
  const id = path[path.length - 1]
  const [blogData, setBlogData] = useState()
  console.log(id)
  const state = useLocation();
  console.log(state.title)

  useEffect(() => {
    blog.getBlog(id).then((data) => {
      console.log(data)
      setBlogData(data)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  return (
    <Box className="blog-card">
      <img
        src={blogData?.imageUrl}
        alt="blog"
        className="blog-image"
      />

      <Box className="blog-content">
        <Typography className="blog-title">
          {blogData?.title}
        </Typography>

        <Typography className="blog-author">
          By {blogData?.author || "Admin"}
        </Typography>

        <Typography className="blog-description">
          {blogData && HTMLReactParser(blogData?.content)}
        </Typography>
      </Box>
    </Box>

  )
}

export default BlogDescription