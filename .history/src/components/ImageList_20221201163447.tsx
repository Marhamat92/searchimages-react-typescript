import React from "react";
import ImageCard from "./ImageCard";

type Props = {
  images: any[];
};

const ImageList = ({ images }: Props) => {
  const renderedImages = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div>{renderedImages}</div>;
};

export default ImageList;
