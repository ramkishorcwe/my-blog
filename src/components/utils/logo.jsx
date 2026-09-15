import React from "react";
import logo from "../../assets/logo-1.png";
import { FileText, CodeXml } from "lucide-react";

const Logo = ({ src = logo, alt = "..." }) => {
  return (
    <div
      style={{ width: 58, height: 54, borderRadius: 100, overflow: "hidden" }}
    >
      <img
        src={"/logo.png"}
        alt={alt}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
    // <div className="blog-logo">
    //   <FileText size={32} />
    //   <CodeXml size={18} />
    // </div>
  );
};

export default Logo;
