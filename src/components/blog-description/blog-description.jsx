// import { Typography } from 'antd'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import { Box, Typography } from "@mui/material";
import auth from '../../appwrite/auth';
import blog from '../../appwrite/blog';

const BlogDescription = () => {
  const location = useLocation();
  const path = location.pathname.split("/")
  const id = path[path.length - 1]
  console.log(id)
  // const { name, email, id } = location.state;
  // const { state } = useLocation();

  useEffect(() => {
    blog.getBlog(id).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  });

  return (
    <Box>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
        This is Blog Descripotion Page
      </Typography>
    </Box>
  )
}

export default BlogDescription