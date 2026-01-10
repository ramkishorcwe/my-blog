import Blog from "../blog/blogs-list/blogs";
import '../../components/'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import authService from '../../appwrite/auth'
import database from '../../appwrite/blog'
import { userStatus } from '../../store/auth-reducer'
import { Select } from "antd";
const { Option } = Select;

const Home = () => {
  // const userAuth = useSelector((store) => store.authState.status);
  const navigate = useNavigate();
  const [blogsList, setBlogsList] = useState([]);
  const dispatch = useDispatch();

  const userLoginStatus = async () => {
    try {
      const user = await authService.getUser()
      if (user) {
        dispatch(userStatus({ userData: user, status: true }));
      }

    } catch (error) {
      console.log(error)
      // navigate('/login')
    }
  }
  const fetchData = async () => {
    try {
      const blogList = await database.listBlog();
      setBlogsList(blogList.documents);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    userLoginStatus();
    fetchData()
  }, [])
  const createProps = (blog) => {
    return {
      ...blog,
      key: blog.title,
      fetchData
    }
  }
  return (
    <div className="header-footer-gap bg-cyan-950">
      <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 10, alignItems: 'center' }}>
        <h1>My Blogs</h1>
        {/*todo apply filter */}
        <Select style={{ width: 150 }} defaultActiveFirstOption={true} defaultValue={'My Blogs'}>
          <Option value="My Blogs">My Blogs</Option>
          <Option value="Others Blogs">Others Blog</Option>
        </Select>
      </div>
      <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center", gap: 20 }}>
        {blogsList.map((blog) => <Blog key={blog.$id} {...createProps(blog)} />)}
      </div>
    </div>
  )
}

export default Home