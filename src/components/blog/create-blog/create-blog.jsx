import React, { useEffect, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Flex, Image, Input, Button, Card, message, Select } from "antd";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import envObj from "../../../environmentConfig";
import bucket from "../../../appwrite/bucket";
import blog from "../../../appwrite/blog";
import Blog from "../../../appwrite/blog";
import constant from "../../../../constent";
import { sentenceCase } from "../../utils/utilsMethos";
import DOMPurify from "dompurify";
import SafeImage from "../../utils/safeImage";
import "../blog.css";

const CreateBlog = () => {
  const [uploadImageDetail, setUploadImageDetail] = useState(null);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const loginUserId = useSelector((store) => store.authState);
  const imgId = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  if (!loginUserId?.userData?.$id) {
    navigate("/login");
  }

  useEffect(() => {
    (async () => {
      const tempImgId = localStorage.getItem("pendingBlogImage");
      if (tempImgId) {
        await bucket.deleteImage(tempImgId);
        localStorage.removeItem("pendingBlogImage");
      }

      if (location?.state?.id) {
        const data = await Blog.getBlog(location.state.id);
        imgId.current = data.featuredImage;
        setTitle(data.title);
        setDescription(data.content);
        setTag(data.tags);
        setUploadImageDetail({ $id: data.featuredImage });
      }
    })();

    return async () => {
      try {
        const tempImgId = localStorage.getItem("pendingBlogImage");
        if (tempImgId) {
          await bucket.deleteImage(tempImgId);
          localStorage.removeItem("pendingBlogImage");
        }
      } catch (error) {
        messageApi.info(error.message);
      }
    };
  }, []);

  const normalizeHTML = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;

    // 1. Remove class/id/data-* attributes
    div.querySelectorAll("*").forEach((el) => {
      el.removeAttribute("class");
      el.removeAttribute("id");
      [...el.attributes].forEach((a) => {
        if (a.name.startsWith("data-")) el.removeAttribute(a.name);
      });
    });

    // 2. Unwrap <span> and <div>
    div.querySelectorAll("span, div").forEach((el) => {
      const parent = el.parentNode;
      while (el.firstChild) parent.insertBefore(el.firstChild, el);
      parent.removeChild(el);
    });

    // 3. Turn bare text nodes at the top level into <p>
    const result = document.createElement("div");
    [...div.childNodes].forEach((node) => {
      if (node.nodeType === 3) {
        const text = node.textContent.trim();
        if (text) {
          const p = document.createElement("p");
          p.textContent = text;
          result.appendChild(p);
        }
      } else {
        result.appendChild(node);
      }
    });

    // 4. Convert <pre> with <br> into <pre><code> with \n
    result.querySelectorAll("pre").forEach((pre) => {
      if (!pre.querySelector("code")) {
        const text = pre.innerHTML
          .replace(/<br\s*\/?>/gi, "\n")
          .replace(/&nbsp;/g, " ")
          .replace(/<[^>]+>/g, "");
        pre.innerHTML = `<code>${text.replace(/</g, "&lt;")}</code>`;
      }
    });

    // 5. Fix the "ol swallowing the article" case
    //    If an <ol>/<ul> contains headings, move those out.
    result.querySelectorAll("ol, ul").forEach((list) => {
      const headings = list.querySelectorAll("h1, h2, h3, h4, h5, h6, hr");
      headings.forEach((h) => {
        // Walk up to the list's direct parent and insert after the list
        let top = h;
        while (top.parentNode && top.parentNode !== list) {
          top = top.parentNode;
        }
        list.parentNode.insertBefore(h, list.nextSibling);
      });
    });

    return result.innerHTML;
  };

  const onChange = (e) => {
    setDescription(e.srcElement.innerHTML);
  };

  const uploadFile = async (e) => {
    try {
      if (!loginUserId?.userData?.$id) {
        throw new Error("Please login first to upload image!");
      }

      const file = e.target.files[0];
      if (!file) return;

      if (uploadImageDetail?.$id) {
        const newImage = await bucket.addImage(file);
        await bucket.deleteImage(uploadImageDetail.$id);

        imgId.current = newImage.$id;
        localStorage.setItem("pendingBlogImage", newImage.$id);
        setUploadImageDetail(newImage);

        messageApi.success("Image updated successfully");
        return;
      }

      const image = await bucket.addImage(file);
      imgId.current = image.$id;
      localStorage.setItem("pendingBlogImage", image.$id);
      setUploadImageDetail(image);

      messageApi.success("Image uploaded successfully");
    } catch (error) {
      messageApi.error(error.message);
    }
  };

  //   const submitBlog = async () => {
  //     if (!uploadImageDetail?.$id) {
  //       messageApi.info("Please upload image before publishing");
  //       return;
  //     }

  //     const cleanHTML = DOMPurify.sanitize(description, {
  //       ALLOWED_TAGS: [
  //         "p",
  //         "h1",
  //         "h2",
  //         "h3",
  //         "h4",
  //         "strong",
  //         "em",
  //         "u",
  //         "s",
  //         "a",
  //         "ul",
  //         "ol",
  //         "li",
  //         "blockquote",
  //         "code",
  //         "pre",
  //         "br",
  //         "hr",
  //         "img",
  //         "figure",
  //         "figcaption",
  //         "table",
  //         "thead",
  //         "tbody",
  //         "tr",
  //         "th",
  //         "td",
  //       ],
  //       ALLOWED_ATTR: ["href", "src", "alt", "title", "target", "rel"],
  //     });
  //     const normalizedHTML = normalizeHTML(cleanHTML);

  //     const article = {
  //       featuredImage: uploadImageDetail.$id,
  //       content: normalizedHTML,
  //       status: "true",
  //       title,
  //       userId: loginUserId.userData.$id,
  //       authorName: loginUserId.userData.name || "Admin",
  //       authorAvtar: loginUserId.userData.avtar || null,
  //       readingTime: Math.ceil(cleanHTML.split(" ").length / 200),
  //       summary: cleanHTML.slice(0, 150) + "...",
  //       tags: [...tag],
  //     };

  //     try {
  //       if (location?.state?.id) {
  //         await blog.updateBlog(location.state.id, article);
  //       } else {
  //         await blog.createBlog(article);
  //       }

  //       imgId.current = null;
  //       localStorage.removeItem("pendingBlogImage");
  //       setUploadImageDetail(null);
  //       navigate("/");
  //     } catch (error) {
  //       messageApi.error(error.message);
  //     }
  //   };

  const submitBlog = async () => {
    if (!uploadImageDetail?.$id) {
      messageApi.info("Please upload image before publishing");
      return;
    }

    // 1. Normalize the raw editor HTML
    const normalized = normalizeHTML(description);

    // 2. Sanitize the normalized HTML
    const cleanHTML = DOMPurify.sanitize(normalized, {
      ALLOWED_TAGS: [
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "strong",
        "em",
        "u",
        "s",
        "a",
        "ul",
        "ol",
        "li",
        "blockquote",
        "code",
        "pre",
        "br",
        "hr",
        "img",
        "figure",
        "figcaption",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
      ],
      ALLOWED_ATTR: ["href", "src", "alt", "title", "target", "rel"],
    });

    const plainText = cleanHTML
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const article = {
      featuredImage: uploadImageDetail.$id,
      content: cleanHTML,
      status: "true",
      title,
      userId: loginUserId.userData.$id,
      authorName: loginUserId.userData.name || "Admin",
      authorAvtar: loginUserId.userData.avtar || null,
      readingTime: Math.max(1, Math.ceil(plainText.split(" ").length / 200)),
      summary: plainText.slice(0, 150) + "...",
      tags: [...tag],
    };

    try {
      if (location?.state?.id) {
        await blog.updateBlog(location.state.id, article);
      } else {
        await blog.createBlog(article);
      }
      imgId.current = null;
      localStorage.removeItem("pendingBlogImage");
      setUploadImageDetail(null);
      navigate("/");
    } catch (error) {
      messageApi.error(error.message);
    }
  };

  return (
    <Card
      style={{
        maxWidth: 1200,
        margin: "24px auto",
        borderRadius: 12,
      }}
    >
      {contextHolder}

      <Flex gap={24} align="start">
        {/* LEFT PANEL */}
        <div className="flex flex-col gap-4 w-100 text-2xl">
          <Card
            title="Blog Details"
            bordered={false}
            style={{ borderRadius: 10, marginBottom: 16 }}
          >
            <div className="mb-4 my-2">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                value={title}
                placeholder="Enter blog title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4 my-2">
              <Select
                value={tag}
                mode="multiple"
                placeholder="Select Blog Category/Keyeord/Tag"
                className="tag-dropdown w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                onChange={(value) => setTag(value)}
                style={{
                  width: "100%",
                  // height: 40,
                  // margin: "4px 8px",
                  border: "1px solid #d1d5db",
                  alignItems: "center",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                }}
              >
                {constant.appKeywords &&
                  constant.appKeywords.map((tag) => (
                    <Option key={tag} value={tag}>
                      {sentenceCase(tag)}
                    </Option>
                  ))}
              </Select>
            </div>
            <div className="mb-4 my-2">
              <input
                type="file"
                onChange={uploadFile}
                className="w-full rounded-lg border border-gray-300 bg-white text-gray-700
                            file:mr-4 file:rounded-md file:border-0
                            file:bg-blue-600 file:px-4 file:py-3
                            file:text-white
                            hover:file:bg-blue-700"
              />
            </div>
          </Card>

          {uploadImageDetail?.$id && (
            <Card
              bordered={false}
              bodyStyle={{ padding: 0 }}
              style={{ borderRadius: 10 }}
            >
              <SafeImage
                src={envObj.bucketImageBaseUrl.replace(
                  "imageId",
                  uploadImageDetail.$id,
                )}
                alt={"Blog cover"}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 10,
                  color: "white",
                }}
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
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright | bullist numlist | image link | removeformat",
              content_style:
                "body { font-family: Inter, system-ui, sans-serif; font-size: 15px }",

              // Only these tags survive paste. Anything else is unwrapped to its text.
              valid_elements:
                "p,h1,h2,h3,h4,h5,h6,strong/b,em/i,u,s,br,hr," +
                "ul,ol,li,blockquote,code,pre,a[href|target|rel]," +
                "img[src|alt|title],figure,figcaption,table,thead,tbody,tr,th,td",

              // Remove these tag TYPES entirely (not just unwrap)
              invalid_elements:
                "script,style,font,div,span,iframe,form,input,button",

              // Strip class/id/data-* on paste
              paste_preprocess: (plugin, args) => {
                const tmp = document.createElement("div");
                tmp.innerHTML = args.content;

                // 1. Remove class / id / data-* from everything
                tmp.querySelectorAll("*").forEach((el) => {
                  el.removeAttribute("class");
                  el.removeAttribute("id");
                  [...el.attributes].forEach((a) => {
                    if (a.name.startsWith("data-")) el.removeAttribute(a.name);
                  });
                });

                // 2. Unwrap <span> and <div> while preserving their text
                tmp.querySelectorAll("span, div").forEach((el) => {
                  const parent = el.parentNode;
                  while (el.firstChild) parent.insertBefore(el.firstChild, el);
                  parent.removeChild(el);
                });

                // 3. Make sure bare text between <p> tags becomes its own <p>
                //    (handles the "Promise.all([1,2,3])" case)
                const wrapper = document.createElement("div");
                wrapper.innerHTML = tmp.innerHTML;
                wrapper.childNodes.forEach((node) => {
                  if (node.nodeType === 3 && node.textContent.trim() !== "") {
                    const p = document.createElement("p");
                    p.textContent = node.textContent;
                    wrapper.replaceChild(p, node);
                  }
                });

                args.content = wrapper.innerHTML;
              },

              paste_webkit_styles: "none",
              paste_remove_styles_if_webkit: true,
              paste_retain_style_properties: "none",
              paste_merge_formats: true,
              paste_data_images: false,
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
  );
};

export default CreateBlog;
