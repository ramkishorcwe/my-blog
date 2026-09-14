import React, { useState, useEffect } from "react";

const SafeImage = ({
  src,
  alt = "",
  fallback,
  className = "",
  style = {},
  ...rest
}) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setFailed(false);
    setLoaded(false);
  }, [src]);

  if (!src || failed) {
    // custom fallback, or a default one
    return (
      fallback || (
        <div
          className={className}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(30, 41, 59, 0.6)",
            color: "#64748b",
            fontSize: 13,
            ...style,
          }}
        >
          No image
        </div>
      )
    );
  }

  {
    !loaded && <div className={`img-skeleton ${className}`} style={style} />;
  }

  return (
    <>
      {!loaded && (
        <div
          className={className}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(30, 41, 59, 0.6)",
            color: "#64748b",
            fontSize: 13,
            ...style,
          }}
        >
          Loading…
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ display: loaded ? "block" : "none", ...style }}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        {...rest}
      />
    </>
  );
};

export default SafeImage;
