import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import envObj from '../../environmentConfig'
import bucket from '../../appwrite/bucket';
import blog from '../../appwrite/blog';

const CreateBlog = ({ name, control, label, defaultValue = "" }) => {
  const [uploadImageDetail, setUploadImageDetail] = useState(null);
  const [description, setDescription] = useState();
  const editorRef = useRef(null);
  useEffect(() => {
    return () => {
      if (uploadImageDetail !== null) {
        // delete
        deleteImage()
      }
    }
  }, [])
  const deleteImage = async () => {
    const result = await bucket.deleteImage(uploadImageDetail.$id)
    console.log(result);
  }
  const log = async () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    const article = {
      featuredImage: uploadImageDetail.$id,
      content: description,
      status: "true",
      title: "1"
    }
    try {
      const blog = await blog.createBlog(article)
      console.log(blog);
      setUploadImageDetail(null)
    } catch (error) {
      console.log(error)
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
      if (uploadImageDetail !== null) {
        // update
        const updateImage = await bucket.updateImage(uploadImageDetail.$id, file);
        setUploadImageDetail(updateImage);
        toast.success("image update success!");
      } else {
        const image = await bucket.addImage(file);
        setUploadImageDetail(image);
        toast.success("success upload");
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {/* add image upload todo */}
      {/* <Editor
        initialValue={defaultValue}
        init={{
          initialValue: defaultValue,
          height: 500,
          menubar: true,
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
          toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
      /> */}
      <input onChange={(e) => uploadFile(e)} type="file" />
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
      <button onClick={log}>Upload Blog</button>

    </div>
  )
}

export default CreateBlog;