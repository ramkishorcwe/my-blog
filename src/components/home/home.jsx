import Blog from "../blog/blogs-list/blogs";
import "../../components/";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
    <div className="header-footer-gap bg-slate-950 min-h-screen px-4 sm:px-6 lg:px-10 py-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          My Blogs
        </h1>

        <Select className="w-full sm:w-40" defaultValue={"My Blogs"}>
          <Option value="My Blogs">My Blogs</Option>
          <Option value="Others Blogs">Others Blog</Option>
        </Select>
      </div>

      {/* Grid */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6 
        mt-10
      "
      >
        {loading ? (
          <>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <BlogSkeleton />
                </motion.div>
              ))}
          </>
        ) : (
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
      className="
      bg-slate-800 
      border border-slate-700 
      rounded-2xl 
      w-full 
      p-5 
      animate-pulse
      "
    >
      <div className="h-40 sm:h-48 bg-slate-700 rounded-lg mb-4" />

      <div className="h-6 bg-slate-700 rounded w-3/4 mb-3" />

      <div className="h-4 bg-slate-700 rounded w-full mb-2" />
      <div className="h-4 bg-slate-700 rounded w-5/6 mb-2" />
      <div className="h-4 bg-slate-700 rounded w-2/3" />

      <div className="h-8 bg-slate-700 rounded mt-5 w-1/3" />
    </div>
  );
};

// export default BlogSkeleton;
