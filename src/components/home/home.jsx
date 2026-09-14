// import Blog from "../blog/blogs-list/blogs";
// // import "../../components/";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import authService from "../../appwrite/auth";
// import database from "../../appwrite/blog";
// import { userStatus } from "../../store/auth-reducer";
// import { Select } from "antd";
// import { motion } from "framer-motion";
// import constant from "../../../constent";
// import { sentenceCase } from "../utils/utilsMethos";
// const { Option } = Select;

// const Home = () => {
//   const [blogsList, setBlogsList] = useState([]);
//   const [filteredBlogsList, setFilteredBlogsList] = useState([]);
//   const [loading, setLoading] = useState(true);
//     const [filterParameter, setFilterParameter] = useState('');
//   const dispatch = useDispatch();

//   const userLoginStatus = async () => {
//     try {
//       const user = await authService.getUser();
//       if (user) {
//         dispatch(userStatus({ userData: user, status: true }));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const blogList = await database.listBlog();
//       setBlogsList(blogList.documents);
//       setFilteredBlogsList(blogList.documents);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     userLoginStatus();
//     fetchData();
//     setFilterParameter("My Blogs")
//   }, []);

//   useEffect(() => {
//     const fetchFilteredBlogs = blogsList.filter((blog) =>
//       // if (filterParameter === "My Blogs") {
//       //   return blog.authorId === authService.getUser().$id;
//       // } else if (filterParameter === "Others Blogs") {
//       //   return blog.authorId !== authService.getUser().$id;
//       // }
//       blog.tags.includes(filterParameter)
//   );
//   console.log("Filtered Blogs: ", fetchFilteredBlogs);
//   setFilteredBlogsList(fetchFilteredBlogs);
//   }, [filterParameter]);

//   const createProps = (blog) => {
//     return {
//       ...blog,
//       fetchData,
//     };
//   };

//   return (
//     <div className="header-footer-gap bg-slate-950 min-h-screen px-4 sm:px-6 lg:px-10 py-6">

//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <h1 className="text-2xl sm:text-3xl font-bold text-white">
//           My Blogs
//         </h1>

//         <Select className="w-full sm:w-40" defaultValue={"My Blogs"} onChange={(e)=>{
//         // console.log(e);
//         setFilterParameter(e);
//         }}>
//            {constant.appKeywords&&constant.appKeywords.map((tag)=>
//                                           <Option key={tag} value={tag}>{sentenceCase(tag)}</Option>)}
//                                     </Select>
//       </div>

//       {/* Grid */}
//       <div
//         className="
//         grid
//         grid-cols-1
//         sm:grid-cols-2
//         md:grid-cols-3
//         lg:grid-cols-4
//         gap-6
//         mt-10
//       "
//       >
//         {loading ? (
//           <>
//             {Array(8)
//               .fill(0)
//               .map((_, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                   viewport={{ once: true }}
//                   className="w-full"
//                 >
//                   <BlogSkeleton />
//                 </motion.div>
//               ))}
//           </>
//         ) : (
//           filteredBlogsList.map((blog) => (
//             <Blog key={blog.$id} {...createProps(blog)} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

// export function BlogSkeleton() {
//   return (
//     <div
//       className="
//       bg-slate-800
//       border border-slate-700
//       rounded-2xl
//       w-full
//       p-5
//       animate-pulse
//       "
//     >
//       <div className="h-40 sm:h-48 bg-slate-700 rounded-lg mb-4" />
//       <div className="h-6 bg-slate-700 rounded w-3/4 mb-3" />
//       <div className="h-4 bg-slate-700 rounded w-full mb-2" />
//       <div className="h-4 bg-slate-700 rounded w-5/6 mb-2" />
//       <div className="h-4 bg-slate-700 rounded w-2/3" />
//       <div className="h-8 bg-slate-700 rounded mt-5 w-1/3" />
//     </div>
//   );
// };

// // export default BlogSkeleton;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Select, message } from "antd";
import { motion } from "framer-motion";
import BlogCard from "../blog/blogs-list/blogs"; // adjust if you renamed it
import authService from "../../appwrite/auth";
import database from "../../appwrite/blog";
import { userStatus } from "../../store/auth-reducer";
import constant from "../../../constent";
import { sentenceCase } from "../utils/utilsMethos";

const { Option } = Select;

/* ──────────────────────────────────────────── */
/*  Skeleton (moved above Home for readability) */
/* ──────────────────────────────────────────── */
export function BlogSkeleton() {
  return (
    <div
      className="bg-slate-900/60 border border-slate-800
                        rounded-2xl w-full p-5 animate-pulse"
    >
      <div className="h-40 sm:h-48 bg-slate-800/80 rounded-xl mb-4" />
      <div className="h-5 bg-slate-800/80 rounded w-3/4 mb-3" />
      <div className="h-3.5 bg-slate-800/60 rounded w-full mb-2" />
      <div className="h-3.5 bg-slate-800/60 rounded w-5/6 mb-2" />
      <div className="h-3.5 bg-slate-800/60 rounded w-2/3" />
      <div className="flex justify-between items-center mt-5">
        <div className="h-3 w-16 bg-slate-800/60 rounded" />
        <div className="h-3 w-20 bg-slate-800/60 rounded" />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────── */
/*  Home                                        */
/* ──────────────────────────────────────────── */
const Home = () => {
  const [blogsList, setBlogsList] = useState([]);
  const [filteredBlogsList, setFilteredBlogsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ownerFilter, setOwnerFilter] = useState("all"); // 'all' | 'mine' | 'others'
  const [tagFilter, setTagFilter] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = useSelector((store) => store.authState.userData);

  /* ── Data ── */
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
      setLoading(false);
    }
  };

  useEffect(() => {
    userLoginStatus();
    fetchData();
  }, []);

  /* ── Filtering ── */
  useEffect(() => {
    let list = blogsList;

    if (ownerFilter === "mine" && loginUser?.$id) {
      list = list.filter((b) => b.userId === loginUser.$id);
    } else if (ownerFilter === "others" && loginUser?.$id) {
      list = list.filter((b) => b.userId !== loginUser.$id);
    }

    if (tagFilter) {
      list = list.filter((b) => b.tags?.includes(tagFilter));
    }

    setFilteredBlogsList(list);
  }, [ownerFilter, tagFilter, blogsList, loginUser]);

  const createProps = (blog) => ({
    ...blog,
    fetchData,
  });

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* ambient top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.12), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* ── Header ── */}
        <header
          className="flex flex-col sm:flex-row
                                   sm:items-end sm:justify-between
                                   gap-5 mb-10"
        >
          <div>
            <h1
              className="text-3xl md:text-4xl font-extrabold
                                       text-white tracking-tight"
            >
              {ownerFilter === "mine"
                ? "My Blogs"
                : ownerFilter === "others"
                  ? "Others' Blogs"
                  : "All Blogs"}
            </h1>
            <p className="text-slate-400 mt-2 text-sm md:text-base">
              Insights and tutorials on JavaScript, React, and more.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Owner filter */}
            <Select
              value={ownerFilter}
              onChange={setOwnerFilter}
              className="min-w-[150px]"
              options={[
                { value: "all", label: "All Blogs" },
                { value: "mine", label: "My Blogs" },
                { value: "others", label: "Others" },
              ]}
            />

            {/* Tag filter */}
            <Select
              allowClear
              value={tagFilter}
              onChange={(v) => setTagFilter(v || null)}
              placeholder="Filter by tag"
              className="min-w-[150px]"
              options={(constant.appKeywords || []).map((t) => ({
                value: t,
                label: sentenceCase(t),
              }))}
            />

            {/* CTA */}
            <button
              onClick={() => navigate("/create-blog")}
              className="px-4 py-2 rounded-xl text-sm font-semibold
                                       bg-gradient-to-r from-blue-500 to-indigo-500
                                       text-white shadow-lg shadow-blue-500/25
                                       hover:shadow-blue-500/40 hover:brightness-110
                                       transition-all"
            >
              + New Blog
            </button>
          </div>
        </header>

        {/* ── Grid ── */}
        {loading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2
                                    md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <BlogSkeleton />
              </motion.div>
            ))}
          </div>
        ) : filteredBlogsList.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4 opacity-70">📝</div>
            <h3 className="text-xl font-semibold text-white">No blogs found</h3>
            <p className="text-slate-400 mt-2 mb-6">
              Try a different filter, or write something new.
            </p>
            <button
              onClick={() => navigate("/create-blog")}
              className="px-5 py-2.5 rounded-xl font-semibold
                                       bg-blue-500 hover:bg-blue-400 text-white
                                       transition"
            >
              Write your first blog
            </button>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2
                                    md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredBlogsList.map((blog, i) => (
              <motion.div
                key={blog.$id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <BlogCard {...createProps(blog)} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
