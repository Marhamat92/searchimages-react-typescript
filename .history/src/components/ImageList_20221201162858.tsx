import React from "react";

type Props = {
  images: any[];
};

const ImageList = ({ images }: Props) => {
  const renderedImages = images.map((image) => {
    return <img src={image.urls.regular} alt={image.description} />;
  });

  return <div>{renderedImages}</div>;
};

export default ImageList;
