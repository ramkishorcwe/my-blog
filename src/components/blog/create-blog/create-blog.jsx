import React, { useEffect, useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import {Flex, Image, Input, Button} from 'antd';
import envObj from '../../../environmentConfig'
import bucket from '../../../appwrite/bucket';
import blog from '../../../appwrite/blog';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { UploadOutlined } from '@ant-design/icons';


const CreateBlog = ({ name, control, label, defaultValue = "" }) => {
  const [uploadImageDetail, setUploadImageDetail] = useState(null);
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const loginUserId = useSelector((store) => store.authState)
  const imgId = useRef(null)
  const editorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("loginUserId", loginUserId)
    return () => {
      // console.log(uploadImageDetail.$id, title, loginUserId)
      if (imgId.current&&imgId.current.$id) {
        // delete
        console.log(uploadImageDetail);
        bucket.deleteImage(imgId.current.$id)
            .then(result => console.log(result))
            .catch(e=>console.log(e))
      }
    }
  }, [])
  const log = async () => {
    if (uploadImageDetail.$id) {
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
        const blog1 = await blog.createBlog(article)
        console.log(blog1);
        imgId.current = null
        setUploadImageDetail(null)
        navigate('/');
      } catch (error) {
        console.log(error)
      }

    } else {
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
    console.log(e.target.files[0]);
    const file = e.target.files[0]
    try {
      console.log(uploadImageDetail)
      if (uploadImageDetail !== null) {
        // update
        const updateImage = await bucket.updateImage(uploadImageDetail.$id, file);
        imgId.current = updateImage
        setUploadImageDetail(updateImage);
        // toast.success("image update success!");
      } else {
        const image = await bucket.addImage(file);
        imgId.current = image;
        setUploadImageDetail(image);
        // toast.success("success upload");
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Flex>
        <label name={"image"} htmlFor='image'>Upload Image
          <Input id='image' name='image' onChange={(e) => uploadFile(e)} type="file"  title={<UploadOutlined />} />
        </label>
        {uploadImageDetail &&
        <Image
            width={200}
            src={envObj.bucketImageBaseUrl.replace("imageId", uploadImageDetail.$id)}
            alt='...'
        />}
      </Flex>
      <label htmlFor='title'>Title
        <Input id='title' name='title' placeholder='Enter Title' type='text' onChange={(e) => setTitle(e.target.value)} />
      </label>

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
        initialValue=""
        onFocusOut={onChange}
      />
      <Button onClick={log}>Upload Blog</Button>
    </div>
  )
}

export default CreateBlog;