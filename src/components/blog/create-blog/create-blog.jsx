import React, { useEffect, useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Flex, Image, Input, Button, Card, message } from 'antd';
import envObj from '../../../environmentConfig'
import bucket from '../../../appwrite/bucket';
import blog from '../../../appwrite/blog';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { UploadOutlined } from '@ant-design/icons';
import Blog from '../../../appwrite/blog'
// import {ColorSystemOptions as toast} from "@mui/material/esm/styles/createThemeWithVars";



const CreateBlog = () => {
    const [uploadImageDetail, setUploadImageDetail] = useState(null);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

    const loginUserId = useSelector((store) => store.authState)
    const imgId = useRef(null)
    const editorRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("location", location)

    if (!loginUserId?.userData?.$id) {
        navigate('/login')
    }

    useEffect(() => {
        (async () => {
            console.log("loginUserId", loginUserId);
            const tempImgId = localStorage.getItem("pendingBlogImage");
            if (tempImgId) {
                console.log(uploadImageDetail);
                const result = await bucket.deleteImage(tempImgId)
                localStorage.clear("pendingBlogImage")
                console.log(result)
            }
            if (location && location.state && location.state.id) {
                const data = await Blog.getBlog(location.state.id)
                imgId.current = data.featuredImage;
                setTitle(data.title)
                setDescription(data.content)
                setUploadImageDetail({ $id: data.featuredImage })
            }
        })();


        return async () => {
            try {
                // console.log(uploadImageDetail.$id, title, loginUserId)
                const tempImgId = localStorage.getItem("pendingBlogImage");
                if (tempImgId) {
                    console.log(uploadImageDetail);
                    const result = await bucket.deleteImage(tempImgId);
                    localStorage.clear("pendingBlogImage")
                    console.log(result)
                }
            } catch (error) {
                messageApi.info(error.message);
            }
        }
    }, [])

    const log = async () => {
        if (uploadImageDetail?.$id) {
            if (editorRef.current) {
                console.log(editorRef.current.getContent());
            }
            const article = {
                featuredImage: uploadImageDetail.$id,
                content: description,
                status: "true",
                title: title,
                userId: loginUserId.userData.$id
            }
            try {
                let blog1;
                if (location && location.state && location.state.id)
                    blog1 = await blog.updateBlog(location.state.id, article)
                else
                    blog1 = await blog.createBlog(article)
                console.log(blog1);
                imgId.current = null
                localStorage.clear('pendingBlogImage');
                setUploadImageDetail(null)
                navigate('/');
            } catch (error) {
                console.log(error)
            }

        } else {
            contextHolder("Please first add image then submit post")
            console.log("please first add image then submit post")
        }

        // upload post and set null on both state
    };
    const onChange = (para) => {
        console.log("para.srcElement.innerHTML", para.srcElement.innerHTML);
        console.log(para)
        setDescription(para.srcElement.innerHTML)
        // bucket.addImage()
    }
    const uploadFile = async (e) => {
        try {
            if (!loginUserId?.userData?.$id) {
                throw new Error("Please login first to upload Image!");
            }

            const file = e.target.files[0];
            if (!file) return;

            // your upload logic
            console.log(uploadImageDetail)
            if (uploadImageDetail !== null) {
                // update
                // const verifyImage = await bucket.fetchImage(uploadImageDetail.$id)
                if (uploadImageDetail?.$id) {
                    console.log("updating image");

                    // 1️⃣ Upload new image FIRST
                    const newImage = await bucket.addImage(file);

                    // 2️⃣ Only after success → delete old image
                    try {
                        await bucket.deleteImage(uploadImageDetail.$id);
                    } catch (err) {
                        console.warn("Old image already deleted");
                    }

                    // 3️⃣ Persist new image
                    imgId.current = newImage.$id;
                    localStorage.setItem("pendingBlogImage", newImage.$id);
                    setUploadImageDetail(newImage);

                    messageApi.success("Image updated successfully");

                } else {
                    console.log("create image");
                    const image = await bucket.addImage(file);
                    imgId.current = image;
                    // 🔐 persist reference
                    localStorage.setItem("pendingBlogImage", image.$id);
                    setUploadImageDetail(image);
                    messageApi.success("success update");
                    //todo add image id on blog
                }
                return
            }
            console.log("create image");
            const image = await bucket.addImage(file);
            imgId.current = image;
            // 🔐 persist reference
            localStorage.setItem("pendingBlogImage", image.$id);
            setUploadImageDetail(image);
            messageApi.success("success upload");

        } catch (error) {
            console.error(error.message);
            // graceful UI handling
            messageApi.info(error.message);
        }
    };


    return (
        <Card>
            <Flex>
                {contextHolder}
                <div>
                    <Card>
                        <label name={"image"} htmlFor='image'>Upload Image
                            <Input id='image' name='image' onChange={(e) => uploadFile(e)} type="file"
                                title={<UploadOutlined />} />
                        </label>
                        <label htmlFor='title'>Title
                            <Input id='title' name='title' value={title ?? ""} placeholder='Enter Title' type='text'
                                onChange={(e) => setTitle(e.target.value)} />
                        </label>
                    </Card>

                    {uploadImageDetail?.$id && <Card>
                        <Image
                            width={600}
                            height={270}
                            src={envObj.bucketImageBaseUrl.replace("imageId", uploadImageDetail?.$id)}
                            alt='...'
                        />
                    </Card>}
                    {/* {<Card>
                        <Image
                            width={600}
                            height={270}
                            src={uploadImageDetail?.id ? envObj.bucketImageBaseUrl.replace("imageId", uploadImageDetail?.id) : ''}
                            alt='...'
                        />
                    </Card>} */}
                </div>

                <Card>
                    <Editor
                        apiKey={envObj.tinymceKey}
                        init={{
                            // plugins: [
                            //   // Core editing features
                            //   'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                            //   // Your account includes a free trial of TinyMCE premium features
                            //   // Try the most popular premium features until Dec 14, 2024:
                            //   'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
                            //   // Early access to document converters
                            //   'importword', 'exportword', 'exportpdf'
                            // ],
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            // toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            // tinycomments_mode: 'embedded',
                            // tinycomments_author: 'Author name',
                            // mergetags_list: [
                            //   { value: 'First.Name', title: 'First Name' },
                            //   { value: 'Email', title: 'Email' },
                            // ],
                            // ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        initialValue={description ?? ""}
                        // style={{maxWidth: 600}}
                        onFocusOut={onChange}
                    />
                    <Button disabled={uploadImageDetail?.$id ? false : true} onClick={log}>Upload Blog</Button>
                </Card>
            </Flex>
        </Card>
    )
}

export default CreateBlog;