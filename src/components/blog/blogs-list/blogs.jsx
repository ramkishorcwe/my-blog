import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import HTMLReactParser from "html-react-parser/lib/index";
import envConfig from "../../../environmentConfig";
import { useSelector } from "react-redux";
import blogConfig from "../../../appwrite/blog";
import { useNavigate } from "react-router";
import { message } from "antd";
import bucket from "../../../appwrite/bucket";
import "../blog.css";

// const BlogCard = (props) => {
//   const [messageApi, contextHolder] = message.useMessage();
//   const loginUser = useSelector((store) => {
//     return store.authState.userData;
//   });
//   const imageUrl = envConfig.bucketImageBaseUrl.replace(
//     "imageId",
//     props.featuredImage,
//   );
//   const navigate = useNavigate();

//   const deleteMyBlog = async (id, imgId) => {
//     try {
//       await blogConfig.deleteBlog(id);
//       if (imgId) {
//         const result = await bucket.deleteImage(imgId);
//         console.log(result);
//       }
//       messageApi.error("Blog Delete Successful!");
//       props.fetchData();
//     } catch (error) {
//       messageApi.error(error.message);
//       console.log(error);
//     }
//   };
//   const editMyBlog = (data) => {
//     console.log(data);
//     navigate("/create-blog", {
//       state: {
//         id: data.$id,
//       },
//     });
//   };
//   return (
//     <>
//       {contextHolder}
//       <Card
//         className="plp-card"
//         key={`${props.$id}${props.title}`}
//         onClick={() => {
//           navigate(`blog/${props.$id}`, { state: props });
//         }}
//       >
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             className="plp-image"
//             image={imageUrl}
//             alt=""
//             onError={(e) => {
//               e.target.src = "/vite.svg"; // add any local placeholder
//             }}
//           />

//           <CardContent className="plp-content">
//             <div className="plp-header">
//               <div className="plp-title">{props.title}</div>

//               {loginUser?.$id === props.userId && (
//                 <div className="plp-actions">
//                   <Button
//                     size="small"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       editMyBlog(props);
//                     }}
//                   >
//                     <EditOutlined />
//                   </Button>

//                   <Button
//                     size="small"
//                     color="error"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       deleteMyBlog(props.$id, props.featuredImage);
//                     }}
//                   >
//                     <DeleteOutlined />
//                   </Button>
//                 </div>
//               )}
//             </div>

//             <div className="plp-description">
//               {HTMLReactParser(props.content)}
//             </div>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </>
//   );
// };

// export default BlogCard;

const BlogCard = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const loginUser = useSelector((store) => store.authState.userData);
  const navigate = useNavigate();

  const imageUrl = envConfig.bucketImageBaseUrl.replace(
    "imageId",
    props.featuredImage,
  );

  const deleteMyBlog = async (id, imgId) => {
    try {
      await blogConfig.deleteBlog(id);
      if (imgId) {
        await bucket.deleteImage(imgId);
      }
      messageApi.success("Blog Deleted Successfully!");
      props.fetchData();
    } catch (error) {
      messageApi.error(error.message);
    }
  };

  const editMyBlog = (data) => {
    navigate("/create-blog", {
      state: { id: data.$id },
    });
  };

  return (
    <>
      {contextHolder}

      <div
        className="bg-linear-to-br from-slate-900 to-slate-800 
                           border border-slate-700 rounded-2xl 
                           shadow-lg hover:scale-105 transition duration-300 
                           w-87.5 overflow-hidden cursor-pointer"
        onClick={() => navigate(`/blog/${props.$id}`, { state: props })}
      >
        {/* Image */}
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/vite.svg";
            }}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-white">{props.title}</h3>

            {loginUser?.$id === props.userId && (
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    editMyBlog(props);
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  <EditOutlined />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteMyBlog(props.$id, props.featuredImage);
                  }}
                  className="text-red-400 hover:text-red-500"
                >
                  <DeleteOutlined />
                </button>
              </div>
            )}
          </div>

          <div className="text-gray-400 mt-3 line-clamp-3 text-sm">
            {HTMLReactParser(props.content)}
          </div>

          <div className="mt-5">
            <button
              className="border border-white text-white 
                                       px-4 py-2 rounded-lg 
                                       hover:bg-white hover:text-black 
                                       transition"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
