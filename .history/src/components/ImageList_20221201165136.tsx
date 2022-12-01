import React from "react";
import ImageCard from "./ImageCard";

type Props = {
  images: any[];
};

const ImageList = ({ images }: Props) => {
  const renderedImages = images.map((image) => {
    return (
      <div>
        <ImageCard key={image.id} image={image} />
      </div>
    );
  });

  return (
    <div className='grid grid-cols-3 gap-1 px-4 mt-6'>{renderedImages}</div>
  );
};

export default ImageList;
