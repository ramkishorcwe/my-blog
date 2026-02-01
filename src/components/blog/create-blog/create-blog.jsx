import React, { useEffect, useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Flex, Image, Input, Button, Card, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'

import envObj from '../../../environmentConfig'
import bucket from '../../../appwrite/bucket'
import blog from '../../../appwrite/blog'
import Blog from '../../../appwrite/blog'

const CreateBlog = () => {
    const [uploadImageDetail, setUploadImageDetail] = useState(null)
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [messageApi, contextHolder] = message.useMessage()

    const loginUserId = useSelector((store) => store.authState)
    const imgId = useRef(null)
    const editorRef = useRef(null)
    const navigate = useNavigate()
    const location = useLocation()

    if (!loginUserId?.userData?.$id) {
        navigate('/login')
    }

    useEffect(() => {
        ; (async () => {
            const tempImgId = localStorage.getItem('pendingBlogImage')
            if (tempImgId) {
                await bucket.deleteImage(tempImgId)
                localStorage.removeItem('pendingBlogImage')
            }

            if (location?.state?.id) {
                const data = await Blog.getBlog(location.state.id)
                imgId.current = data.featuredImage
                setTitle(data.title)
                setDescription(data.content)
                setUploadImageDetail({ $id: data.featuredImage })
            }
        })()

        return async () => {
            try {
                const tempImgId = localStorage.getItem('pendingBlogImage')
                if (tempImgId) {
                    await bucket.deleteImage(tempImgId)
                    localStorage.removeItem('pendingBlogImage')
                }
            } catch (error) {
                messageApi.info(error.message)
            }
        }
    }, [])

    const onChange = (e) => {
        setDescription(e.srcElement.innerHTML)
    }

    const uploadFile = async (e) => {
        try {
            if (!loginUserId?.userData?.$id) {
                throw new Error('Please login first to upload image!')
            }

            const file = e.target.files[0]
            if (!file) return

            if (uploadImageDetail?.$id) {
                const newImage = await bucket.addImage(file)
                await bucket.deleteImage(uploadImageDetail.$id)

                imgId.current = newImage.$id
                localStorage.setItem('pendingBlogImage', newImage.$id)
                setUploadImageDetail(newImage)

                messageApi.success('Image updated successfully')
                return
            }

            const image = await bucket.addImage(file)
            imgId.current = image.$id
            localStorage.setItem('pendingBlogImage', image.$id)
            setUploadImageDetail(image)

            messageApi.success('Image uploaded successfully')
        } catch (error) {
            messageApi.error(error.message)
        }
    }

    const submitBlog = async () => {
        if (!uploadImageDetail?.$id) {
            messageApi.info('Please upload image before publishing')
            return
        }

        const article = {
            featuredImage: uploadImageDetail.$id,
            content: description,
            status: 'true',
            title,
            userId: loginUserId.userData.$id,
        }

        try {
            if (location?.state?.id) {
                await blog.updateBlog(location.state.id, article)
            } else {
                await blog.createBlog(article)
            }

            imgId.current = null
            localStorage.removeItem('pendingBlogImage')
            setUploadImageDetail(null)
            navigate('/')
        } catch (error) {
            messageApi.error(error.message)
        }
    }

    return (
        <Card
            style={{
                maxWidth: 1200,
                margin: '24px auto',
                borderRadius: 12,
            }}
        >
            {contextHolder}

            <Flex gap={24} align="start">
                {/* LEFT PANEL */}
                <div style={{ width: 360 }}>
                    <Card
                        title="Blog Details"
                        bordered={false}
                        style={{ borderRadius: 10, marginBottom: 16 }}
                    >
                        <div style={{ marginBottom: 16 }}>
                            <label>Featured Image</label>
                            <Input
                                type="file"
                                onChange={uploadFile}
                                style={{ marginTop: 6 }}
                            />
                        </div>

                        <div>
                            <label>Title</label>
                            <Input
                                value={title}
                                placeholder="Enter blog title"
                                onChange={(e) => setTitle(e.target.value)}
                                style={{ marginTop: 6 }}
                            />
                        </div>
                    </Card>

                    {uploadImageDetail?.$id && (
                        <Card
                            bordered={false}
                            bodyStyle={{ padding: 0 }}
                            style={{ borderRadius: 10 }}
                        >
                            <Image
                                preview={false}
                                style={{
                                    width: '100%',
                                    height: 200,
                                    objectFit: 'cover',
                                    borderRadius: 10,
                                }}
                                src={envObj.bucketImageBaseUrl.replace(
                                    'imageId',
                                    uploadImageDetail.$id
                                )}
                            />
                        </Card>
                    )}
                </div>

                {/* RIGHT PANEL */}
                <Card
                    title="Write Your Blog"
                    bordered={false}
                    style={{ flex: 1, borderRadius: 12 }}
                >
                    <Editor
                        apiKey={envObj.tinymceKey}
                        initialValue={description}
                        init={{
                            height: 420,
                            menubar: false,
                            plugins: [
                                'image',
                                'advlist',
                                'autolink',
                                'lists',
                                'link',
                                'charmap',
                                'preview',
                                'searchreplace',
                                'visualblocks',
                                'code',
                                'fullscreen',
                                'insertdatetime',
                                'media',
                                'table',
                                'wordcount',
                            ],
                            toolbar:
                                'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright | bullist numlist | image link | removeformat',
                            content_style:
                                'body { font-family: Inter, system-ui, sans-serif; font-size: 15px }',
                        }}
                        onFocusOut={onChange}
                    />

                    <Flex justify="end" style={{ marginTop: 16 }}>
                        <Button
                            type="primary"
                            size="large"
                            disabled={!uploadImageDetail?.$id}
                            onClick={submitBlog}
                        >
                            Publish Blog
                        </Button>
                    </Flex>
                </Card>
            </Flex>
        </Card>
    )
}

export default CreateBlog
