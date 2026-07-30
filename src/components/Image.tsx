import React from 'react'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number | string;
  height?: number | string;
  sizes?: string;
  priority?: boolean;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, width, height, onClick, ...props }) => {
  return (
    <img
      src={src as string}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      loading={props.priority ? "eager" : "lazy"}
      {...props}
    />
  )
}

export default Image
