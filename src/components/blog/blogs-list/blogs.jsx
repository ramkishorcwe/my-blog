import React from 'react'
import Image from '../../utils/image'
// import Button from '../../utils/button'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
// import Card from 'antd/es/card/Card'
import HTMLReactParser from 'html-react-parser/lib/index'
import envConfig from '../../../environmentConfig'
import { useSelector } from 'react-redux'
import blogConfig from '../../../appwrite/blog'
import { useNavigate } from "react-router";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import '../blog.css'

const BlogCard = (props) => {
    const loginUser = useSelector((store) => {
        return store.authState.userData
    });
    const imageUrl = envConfig.bucketImageBaseUrl.replace("imageId", props.featuredImage);
    const navigate = useNavigate();


    // imagesrc = envConfig.bucketImageBaseUrl
    const deleteMyBlog = (id) => {
        try {
            blogConfig.deleteBlog(id)
            alert("Blog Delete Successful!")
        } catch (error) {
            console.log(error)
        }
    }
    const editMyBlog = (data) => {
        console.log(data)
        navigate("/create-blog", {
            state: {
                data
            }
        });
    }
    return (
        // <Card>
        //   <h3>{props.title}</h3>
        //   <Image {...{ src: props.img, alt: "...", style: { width: 300, height: 300 } }} />
        //   <p>{props.description}</p>
        //   <Button {...{ style: { width: 60, height: 35 } }}>
        //     {<EditOutlined />}
        //   </Button>
        //   <Button  {...{ style: { width: 60, height: 35, color: 'red' } }}>
        //     {<DeleteOutlined />}
        //   </Button>
        // </Card>

        // <Card
        //   hoverable
        //   style={{ width: 300, padding: "unset", margin: "unset" }}
        //   cover={<Image {...{ src: imageUrl, alt: "...", style: { width: 300, height: 180 } }} />}
        //   key={props.featuredImage}
        //   onClick={() => { navigate(`/${props.$id}`, { state: props }) }}
        // >
        //   <h4 style={{ padding: "unset", margin: "unset" }}>{props.title}</h4>
        //   {HTMLReactParser(props.content)}
        //   {loginUser?.$id === props.userId && <><Button {...{ style: { width: 60, height: 35 }, onClick: editBlog, data: props }}>
        //     {<EditOutlined />}
        //   </Button>
        //     <Button  {...{ style: { width: 60, height: 35, color: 'red' }, onClick: deleteBlog, data: props.$id, name: "blogList" }}>
        //       {<DeleteOutlined />}
        //     </Button></>}
        //   {/* <Meta title={props.title} description="www.instagram.com" /> */}
        // </Card>
        <Card
            className="plp-card"
            key={`${props.$id}${props.title}`}
            onClick={() => {
                navigate(`blog/${props.$id}`, { state: props });
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    className="plp-image"
                    image={imageUrl}
                    alt="Blog Image"
                />

                <CardContent className="plp-content">
                    <div className="plp-header">
                        <div className="plp-title">{props.title}</div>

                        {loginUser?.$id === props.userId && (
                            <div className="plp-actions">
                                <Button
                                    size="small"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        editMyBlog(props);
                                    }}
                                >
                                    <EditOutlined />
                                </Button>

                                <Button
                                    size="small"
                                    color="error"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteMyBlog(props.$id);
                                    }}
                                >
                                    <DeleteOutlined />
                                </Button>
                            </div>
                        )}
                    </div>

                    <div className="plp-description">
                        {HTMLReactParser(props.content)}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default BlogCard



