import Blog from "../blog/blogs-list/blogs";
import "../../components/";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import authService from "../../appwrite/auth";
import database from "../../appwrite/blog";
import { userStatus } from "../../store/auth-reducer";
import { Select } from "antd";
const { Option } = Select;
import { motion } from "framer-motion";

const Home = () => {
  const [blogsList, setBlogsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const userLoginStatus = async () => {
    try {
      const user = await authService.getUser();
      if (user) {
        dispatch(userStatus({ userData: user, status: true }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = async () => {
    try {
      setLoading(true);
      const blogList = await database.listBlog();
      setBlogsList(blogList.documents);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userLoginStatus();
    fetchData();
  }, []);
  const createProps = (blog) => {
    return {
      ...blog,
      key: blog.title,
      fetchData,
    };
  };
  return (
    <div className="header-footer-gap bg-slate-950 min-h-screen px-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">My Blogs</h1>

        <Select style={{ width: 150 }} defaultValue={"My Blogs"}>
          <Option value="My Blogs">My Blogs</Option>
          <Option value="Others Blogs">Others Blog</Option>
        </Select>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 justify-items-center mt-10">
        {loading ? (
          <>
            {/* <div className="col-span-full text-center text-white flex flex-col justify-center"> */}
            {/* Loading... */}
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-linear-to-br from-slate-900 to-slate-800 
             border border-slate-700 rounded-2xl 
             shadow-lg hover:scale-105 transition duration-300 
             w-87.5 overflow-hidden cursor-pointer"
                >
                  <BlogSkeleton key={index} />
                </motion.div>
              ))}
            {/* </div> */}
          </>
        ) : (
          // </div>
          blogsList.map((blog) => (
            <Blog key={blog.$id} {...createProps(blog)} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;

const BlogSkeleton = () => {
  return (
    <div
      className="bg-slate-800 border border-slate-700 
                    rounded-2xl w-[350px] p-5 animate-pulse"
    >
      <div className="h-48 bg-slate-700 rounded-lg mb-4"></div>

      <div className="h-6 bg-slate-700 rounded w-3/4 mb-3"></div>

      <div className="h-4 bg-slate-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-2/3"></div>

      <div className="h-8 bg-slate-700 rounded mt-5 w-1/3"></div>
    </div>
  );
};

// export default BlogSkeleton;
