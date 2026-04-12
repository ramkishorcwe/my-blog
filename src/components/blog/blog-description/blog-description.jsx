import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import blog from "../../../appwrite/blog";
import parse from "html-react-parser";
import envConfig from "../../../environmentConfig";

const BlogDescription = () => {
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  const [blogData, setBlogData] = useState();

  useEffect(() => {
    blog.getBlog(id).then((data) => {
      const url = envConfig.bucketImageBaseUrl.replace(
        "imageId",
        data.featuredImage
      );

      setBlogData({ ...data, imageUrl: url });
    });
  }, [id]);

  // simple reading time
  const readingTime = blogData?.content
    ? Math.ceil(blogData.content.split(" ").length / 200)
    : 0;

  return (
    <div className="bg-slate-950 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          {blogData?.title}
        </h1>

        {/* Author + Reading time */}
        <div className="flex items-center justify-center gap-4 mb-8 text-gray-400">

          <img
            src="https://i.pravatar.cc/40"
            alt="author"
            className="w-10 h-10 rounded-full"
          />

          <span>{blogData?.authorName || "Admin"}</span>

          <span>•</span>

          <span>{readingTime} min read</span>

          <span>•</span>

          <span>{blogData?.$createdAt} created.</span>
        </div>

        {/* Featured Image */}
        <img
          src={blogData?.imageUrl}
          alt="Blog"
          className="rounded-xl w-full mb-10 max-h-[400px] object-cover"
        />

        {/* Blog Content */}
        <div
          className="
          prose 
          prose-lg 
          prose-invert 
          max-w-none
          prose-headings:text-white
          prose-p:text-gray-300
          prose-strong:text-white
          prose-code:bg-slate-800
          prose-code:px-1
          prose-code:rounded
          text-gray-300
        "
        >
          {blogData?.content && parse(blogData.content)}
        </div>

      </div>
    </div>
  );
};

export default BlogDescription;