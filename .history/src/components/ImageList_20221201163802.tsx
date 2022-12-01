import React from "react";
import ImageCard from "./ImageCard";

type Props = {
  images: any[];
};

const ImageList = ({ images }: Props) => {
  const renderedImages = images.map((image) => {
    return (
      <div className='grid grid-cols-3'>
        <ImageCard key={image.id} image={image} />
      </div>
    );
  });

  return <div>{renderedImages}</div>;
};

export default ImageList;
