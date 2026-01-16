import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import HTMLReactParser from 'html-react-parser/lib/index'
import envConfig from '../../../environmentConfig'
import { useSelector } from 'react-redux'
import blogConfig from '../../../appwrite/blog'
import { useNavigate } from "react-router";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import { message } from 'antd'
import bucket from '../../../appwrite/bucket'
import '../blog.css'

const BlogCard = (props) => {
    const [messageApi, contextHolder] = message.useMessage();
    const loginUser = useSelector((store) => {
        return store.authState.userData
    });
    const imageUrl = envConfig.bucketImageBaseUrl.replace("imageId", props.featuredImage);
    const navigate = useNavigate();

    const deleteMyBlog = async (id, imgId) => {
        try {
            await blogConfig.deleteBlog(id)
            if (imgId) {
                const result = await bucket.deleteImage(imgId)
                console.log(result)
            }
            messageApi.error("Blog Delete Successful!");
            props.fetchData()
        } catch (error) {
            messageApi.error(error.message);
            console.log(error)
        }
    }
    const editMyBlog = (data) => {
        console.log(data)
        navigate("/create-blog", {
            state: {
                id: data.$id
            }
        });
    }
    return (
        <>
            {contextHolder}
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
                                            deleteMyBlog(props.$id, props.featuredImage);
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
        </>

    )
}

export default BlogCard



