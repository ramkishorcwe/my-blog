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
    <Box sx={{ bgcolor: "#f5f5f5", p: 2, borderRadius: 2, maxWidth: "90%", margin: 'auto' }}>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
        {blogData && blogData.title}
      </Typography>
      <Box>
        <Typography>
          {blogData && HTMLReactParser(blogData?.content)}
        </Typography>
      </Box>

    </Box>
  )
}

export default BlogDescription