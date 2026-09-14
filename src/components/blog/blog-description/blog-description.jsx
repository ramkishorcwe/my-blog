import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import blog from "../../../appwrite/blog";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import envConfig from "../../../environmentConfig";
import "../blog.css"; // 👈 import the styles
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import SafeImage from "../../utils/safeImage";

const BlogDescription = () => {
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [blogData, setBlogData] = useState();
  const plainText = (blogData?.content || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const readingTime = plainText
    ? Math.max(1, Math.ceil(plainText.split(" ").length / 200))
    : 0;

  const cleanContent = blogData?.content
    ? DOMPurify.sanitize(blogData.content, {
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
      })
    : "";

  const formattedDate = blogData?.$createdAt
    ? new Date(blogData.$createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  useEffect(() => {
    blog.getBlog(id).then((data) => {
      const url = envConfig.bucketImageBaseUrl.replace(
        "imageId",
        data.featuredImage,
      );
      setBlogData({ ...data, imageUrl: url });
    });
  }, [id]);

  useEffect(() => {
    document.querySelectorAll(".blog-article pre").forEach((pre) => {
      if (pre.querySelector(".copy-btn")) return;
      const btn = document.createElement("button");
      btn.textContent = "Copy";
      btn.className = "copy-btn";
      btn.onclick = () => {
        navigator.clipboard.writeText(pre.innerText);
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1500);
      };
      pre.style.position = "relative";
      pre.appendChild(btn);
    });
  }, [cleanContent]);

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4">
      {/* subtle radial glow at top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.15), transparent 70%)",
        }}
      />

      <article className="relative max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center leading-tight tracking-tight mb-6">
          {blogData?.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm text-slate-400">
          <img
            src={
              blogData?.authorAvtar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                blogData?.authorName || "Admin",
              )}&background=3b82f6&color=fff`
            }
            alt={blogData?.authorName || "Author"}
            className="w-9 h-9 rounded-full ring-2 ring-slate-800"
          />
          <span className="text-slate-300 font-medium">
            {blogData?.authorName || "Admin"}
          </span>
          <span className="text-slate-600">•</span>
          <span>{readingTime} min read</span>
          {formattedDate && (
            <>
              <span className="text-slate-600">•</span>
              <span>{formattedDate}</span>
            </>
          )}
        </div>

        {/* Featured image */}
        {/* {blogData?.imageUrl && (
          <SafeImage
            src={blogData.imageUrl}
            alt={blogData?.title || "Blog cover"}
            className="rounded-2xl w-full mb-12 max-h-[420px] object-cover ring-1 ring-slate-800 shadow-2xl shadow-blue-500/5 h-320"
          />
        )} */}

        {blogData?.imageUrl && (
          <SafeImage
            src={blogData.imageUrl}
            alt={blogData?.title || "Blog cover"}
            className="rounded-2xl w-full mb-12 max-h-[420px] object-cover ring-1 ring-slate-800 shadow-2xl shadow-blue-500/5 h-320"
            style={{ maxHeight: 420, width: "100%", objectFit: "cover" }}
            fallback={
              <div className="w-full mb-12 h-[420px] rounded-2xl bg-slate-900 ring-1 ring-slate-800 flex items-center justify-center text-slate-500">
                <div className="text-center">
                  <div className="text-4xl mb-2">🖼️</div>
                  <div className="text-sm">Image unavailable</div>
                </div>
              </div>
            }
          />
        )}

        {/* Tags */}
        {blogData?.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {blogData.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="blog-article">
          {cleanContent && parse(cleanContent)}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">Thanks for reading ✨</p>
        </div>
      </article>
    </div>
  );
};

export default BlogDescription;
