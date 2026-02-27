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

const Home = () => {
  const [blogsList, setBlogsList] = useState([]);
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
      const blogList = await database.listBlog();
      setBlogsList(blogList.documents);
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
    // <div className="header-footer-gap bg-cyan-950">
    //   <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 10, alignItems: 'center' }}>
    //     <h1>My Blogs</h1>
    //     {/*todo apply filter */}
    //     <Select style={{ width: 150 }} defaultActiveFirstOption={true} defaultValue={'My Blogs'}>
    //       <Option value="My Blogs">My Blogs</Option>
    //       <Option value="Others Blogs">Others Blog</Option>
    //     </Select>
    //   </div>
    //   <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center", gap: 20 }}>
    //     {blogsList.map((blog) => <Blog key={blog.$id} {...createProps(blog)} />)}
    //   </div>
    // </div>
    <div className="header-footer-gap bg-cyan-950 min-h-screen px-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">My Blogs</h1>

        <Select style={{ width: 150 }} defaultValue={"My Blogs"}>
          <Option value="My Blogs">My Blogs</Option>
          <Option value="Others Blogs">Others Blog</Option>
        </Select>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 justify-items-center mt-10">
        {blogsList.map((blog) => (
          <Blog key={blog.$id} {...createProps(blog)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
