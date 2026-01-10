// import { Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { Box, Typography } from "@mui/material";
// import auth from '../../appwrite/auth';
import blog from '../../../appwrite/blog';
import HTMLReactParser from 'html-react-parser/lib/index';
import envConfig from '../../../environmentConfig'
import CardMedia from '@mui/material/CardMedia';


const BlogDescription = () => {
  const location = useLocation();
  const path = location.pathname.split("/")
  const id = path[path.length - 1]
  const [blogData, setBlogData] = useState()
  console.log(id)
  const state = useLocation();
  console.log(state.title)
  // const imageUrlRef = envConfig.bucketImageBaseUrl.replace("imageId", props.featuredImage);

  useEffect(() => {
    blog.getBlog(id).then((data) => {
      //TODO authorId = data.userId for edit and delete show
      console.log(data)
      const url = envConfig.bucketImageBaseUrl.replace("imageId", data.featuredImage);
      const tempData = { ...data, imageUrl: url }
      setBlogData(tempData)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  return (
    <div>
      <Box className="blog-card">
        <CardMedia
          component="img"
          className="plp-image"
          image={blogData?.imageUrl}
          alt="Blog Image"
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
    </div>

  )
}

export default BlogDescription