import React from "react";

const WebpImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading,
  ...props
}) => {
  // Simple check to ensure we only try to swap extensions for image files
  // If src is base64 or svg, just render img
  if (!src || src.startsWith("data:") || src.endsWith(".svg")) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        {...props}
      />
    );
  }

  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        {...props}
      />
    </picture>
  );
};

export default WebpImage;
