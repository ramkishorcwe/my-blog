// import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import { message, Button, Tooltip } from "antd";
// import blogConfig from "../../../appwrite/blog";
// import bucket from "../../../appwrite/bucket";
// import envConfig from "../../../environmentConfig";

// const BlogCard = (props) => {
//   const [messageApi, contextHolder] = message.useMessage();
//   const loginUser = useSelector((store) => store.authState.userData);
//   const navigate = useNavigate();

//   const imageUrl = envConfig.bucketImageBaseUrl.replace(
//     "imageId",
//     props.featuredImage,
//   );

//   // strip HTML if summary is missing
//   // NEW — decode HTML entities too
//   const decodeEntities = (str) =>
//     str
//       .replace(/&nbsp;/g, " ")
//       .replace(/&amp;/g, "&")
//       .replace(/&lt;/g, "<")
//       .replace(/&gt;/g, ">")
//       .replace(/&quot;/g, '"')
//       .replace(/&#39;/g, "'");

//   const plainText = decodeEntities(
//     (props.summary || props.content || "")
//       .replace(/<[^>]+>/g, " ") // strip tags
//       .replace(/\s+/g, " ") // collapse whitespace
//       .trim(),
//   );

//   const readingTime =
//     props.readingTime ||
//     Math.max(1, Math.ceil(plainText.split(" ").length / 200));

//   const formattedDate = props.$createdAt
//     ? new Date(props.$createdAt).toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       })
//     : "";

//   const deleteMyBlog = async (e, id, imgId) => {
//     e.stopPropagation();
//     try {
//       await blogConfig.deleteBlog(id);
//       if (imgId) await bucket.deleteImage(imgId);
//       messageApi.success("Blog Deleted Successfully!");
//       props.fetchData?.();
//     } catch (error) {
//       messageApi.error(error.message);
//     }
//   };

//   const editMyBlog = (e, data) => {
//     e.stopPropagation();
//     navigate("/create-blog", { state: { id: data.$id } });
//   };

//   return (
//     <>
//       {contextHolder}

//       <article
//         onClick={() => navigate(`/blog/${props.$id}`)}
//         className="group flex flex-col
//                            bg-slate-900 border border-slate-800
//                            rounded-2xl overflow-hidden
//                            shadow-lg shadow-black/20
//                            hover:border-slate-700
//                            hover:shadow-2xl hover:shadow-blue-500/10
//                            hover:-translate-y-1
//                            transition-all duration-300
//                            cursor-pointer
//                            w-full max-w-sm"
//       >
//         {/* ---------- Image ---------- */}
//         <div className="relative h-48 overflow-hidden bg-slate-800">
//           <img
//             src={imageUrl}
//             alt={props.title || "Blog cover"}
//             loading="lazy"
//             className="w-full h-full object-cover
//                                    group-hover:scale-105
//                                    transition-transform duration-500"
//             onError={(e) => {
//               e.currentTarget.onerror = null;
//               e.currentTarget.style.display = "none";
//               e.currentTarget.parentElement.classList.add("img-fallback");
//             }}
//           />
//           {/* gradient overlay for legibility of future overlays */}
//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
//         </div>

//         {/* ---------- Body ---------- */}
//         <div className="flex flex-col flex-1 p-5">
//           {/* Title row with actions */}
//           <div className="flex items-start justify-between gap-3">
//             <h3 className="text-lg font-semibold text-white line-clamp-2 leading-snug">
//               {props.title}
//             </h3>

//             {loginUser?.$id === props.userId && (
//               <div className="flex gap-1 shrink-0">
//                 <Tooltip title="Edit">
//                   <button
//                     onClick={(e) => editMyBlog(e, props)}
//                     className="p-1.5 rounded-lg text-slate-400
//                                                    hover:text-white hover:bg-slate-700/60
//                                                    transition"
//                   >
//                     <EditOutlined />
//                   </button>
//                 </Tooltip>
//                 <Tooltip title="Delete">
//                   <button
//                     onClick={(e) =>
//                       deleteMyBlog(e, props.$id, props.featuredImage)
//                     }
//                     className="p-1.5 rounded-lg text-red-400
//                                                    hover:text-red-300 hover:bg-red-500/10
//                                                    transition"
//                   >
//                     <DeleteOutlined />
//                   </button>
//                 </Tooltip>
//               </div>
//             )}
//           </div>

//           {/* Summary */}
//           <p className="mt-3 text-sm text-slate-400 line-clamp-3 leading-relaxed">
//             {plainText.slice(0, 160)}
//             {plainText.length > 160 ? "…" : ""}
//           </p>

//           {/* Tags */}
//           {props.tags?.length > 0 && (
//             <div className="flex flex-wrap gap-1.5 mt-4">
//               {props.tags.slice(0, 3).map((t) => (
//                 <span
//                   key={t}
//                   className="text-[11px] font-medium px-2 py-0.5
//                                                rounded-full
//                                                bg-blue-500/10 text-blue-300
//                                                border border-blue-500/20"
//                 >
//                   #{t}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* Meta footer */}
//           <div
//             className="mt-auto pt-5 flex items-center justify-between
//                                     text-xs text-slate-500 border-t border-slate-800"
//           >
//             <span>{readingTime} min read</span>
//             {formattedDate && <span>{formattedDate}</span>}
//           </div>
//         </div>
//       </article>
//     </>
//   );
// };

// export default BlogCard;

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { message, Tooltip } from "antd";
import blogConfig from "../../../appwrite/blog";
import bucket from "../../../appwrite/bucket";
import envConfig from "../../../environmentConfig";

const decodeEntities = (str = "") =>
  str
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const BlogCard = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const loginUser = useSelector((store) => store.authState.userData);
  const navigate = useNavigate();

  const imageUrl = envConfig.bucketImageBaseUrl.replace(
    "imageId",
    props.featuredImage,
  );

  const plainText = decodeEntities(
    (props.summary || props.content || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );

  const readingTime =
    props.readingTime ||
    Math.max(1, Math.ceil(plainText.split(" ").length / 200));

  const formattedDate = props.$createdAt
    ? new Date(props.$createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const deleteMyBlog = async (e, id, imgId) => {
    e.stopPropagation();
    try {
      await blogConfig.deleteBlog(id);
      if (imgId) await bucket.deleteImage(imgId);
      messageApi.success("Blog Deleted Successfully!");
      props.fetchData?.();
    } catch (error) {
      messageApi.error(error.message);
    }
  };

  const editMyBlog = (e, data) => {
    e.stopPropagation();
    navigate("/create-blog", { state: { id: data.$id } });
  };

  return (
    <>
      {contextHolder}

      <article
        onClick={() => navigate(`/blog/${props.$id}`)}
        className="group relative flex flex-col
                           bg-gradient-to-b from-slate-900 to-slate-950
                           border border-slate-800
                           rounded-2xl overflow-hidden
                           shadow-lg shadow-black/40
                           hover:border-blue-500/40
                           hover:shadow-2xl hover:shadow-blue-500/10
                           hover:-translate-y-1
                           transition-all duration-300 ease-out
                           cursor-pointer h-full"
      >
        {/* ── Image ── */}
        <div className="relative h-48 overflow-hidden bg-slate-900 img-wrap">
          <img
            src={imageUrl}
            alt={props.title || "Blog cover"}
            loading="lazy"
            className="w-full h-full object-cover
                                   group-hover:scale-110
                                   transition-transform duration-700 ease-out"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.classList.add("img-fallback");
            }}
          />

          {/* dark bottom gradient for depth */}
          <div
            className="pointer-events-none absolute inset-0
                                    bg-gradient-to-t from-slate-950/90
                                    via-slate-950/10 to-transparent"
          />

          {/* reading time pill on image */}
          <span
            className="absolute top-3 left-3 text-[11px]
                                     font-medium px-2.5 py-1 rounded-full
                                     bg-slate-950/70 backdrop-blur
                                     text-slate-200 border border-white/10"
          >
            {readingTime} min read
          </span>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="text-lg font-semibold text-white
                                       line-clamp-2 leading-snug
                                       group-hover:text-blue-300
                                       transition-colors"
            >
              {props.title}
            </h3>

            {loginUser?.$id === props.userId && (
              <div className="flex gap-1 shrink-0">
                <Tooltip title="Edit">
                  <button
                    onClick={(e) => editMyBlog(e, props)}
                    className="p-1.5 rounded-lg
                                                   text-slate-400
                                                   hover:text-white
                                                   hover:bg-slate-700/60
                                                   transition"
                  >
                    <EditOutlined />
                  </button>
                </Tooltip>
                <Tooltip title="Delete">
                  <button
                    onClick={(e) =>
                      deleteMyBlog(e, props.$id, props.featuredImage)
                    }
                    className="p-1.5 rounded-lg
                                                   text-red-400
                                                   hover:text-red-300
                                                   hover:bg-red-500/10
                                                   transition"
                  >
                    <DeleteOutlined />
                  </button>
                </Tooltip>
              </div>
            )}
          </div>

          <p
            className="mt-3 text-sm text-slate-400
                                  line-clamp-3 leading-relaxed"
          >
            {plainText.slice(0, 160)}
            {plainText.length > 160 ? "…" : ""}
          </p>

          {props.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {props.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium
                                               px-2 py-0.5 rounded-full
                                               bg-blue-500/10 text-blue-300
                                               border border-blue-500/20"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          <div
            className="mt-auto pt-5 flex items-center justify-between
                                    text-xs text-slate-500
                                    border-t border-slate-800/80"
          >
            <span>{formattedDate}</span>
            <span
              className="text-blue-400 font-medium
                                         group-hover:translate-x-0.5
                                         transition-transform"
            >
              Read →
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
