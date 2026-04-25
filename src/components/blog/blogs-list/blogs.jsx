import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import HTMLReactParser from "html-react-parser";
import envConfig from "../../../environmentConfig";
import { useSelector } from "react-redux";
import blogConfig from "../../../appwrite/blog";
import { useNavigate } from "react-router";
import { message, Button } from "antd";
import bucket from "../../../appwrite/bucket";

const BlogCard = (props) => {
    const [messageApi, contextHolder] = message.useMessage();
    const loginUser = useSelector((store) => store.authState.userData);
    const navigate = useNavigate();

    const imageUrl = envConfig.bucketImageBaseUrl.replace(
        "imageId",
        props.featuredImage
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
        <div>
            {contextHolder}
            <div
                className="bg-slate-800 border border-slate-700 
                   rounded-xl shadow-md 
                   hover:shadow-2xl hover:-translate-y-2
                   transition-all duration-300
                   w-full max-w-sm overflow-hidden 
                   cursor-pointer"
                onClick={() => navigate(`/blog/${props.$id}`)}
            >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt="Blog"
                        className="w-full h-full object-cover hover:scale-110 transition duration-300"
                        onError={(e) => {
                            e.target.src = "/vite.svg";
                        }}
                    />
                </div>

                {/* Content */}
                <div className="p-5">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-white line-clamp-2">
                            {props.title}
                        </h3>

                        {loginUser?.$id === props.userId && (
                            <div className="flex gap-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        editMyBlog(props);
                                    }}
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    <EditOutlined />
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteMyBlog(props.$id, props.featuredImage);
                                    }}
                                    className="text-red-400 hover:text-red-500 transition"
                                >
                                    <DeleteOutlined />
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="text-gray-300 mt-3 text-sm line-clamp-3">
                        {HTMLReactParser(props.content)}
                    </div>

                    <div className="mt-5">
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/blog/${props.$id}`);
                            }}
                            className="border border-white text-white 
                         px-4 py-1 rounded-lg 
                         hover:bg-white hover:text-black 
                         transition"
                        >
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
