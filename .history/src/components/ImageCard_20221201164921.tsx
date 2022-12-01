import React from "react";

type Props = {
  image: any;
};

function ImageCard({ image }: Props) {
  return (
    <div className='col-span-1 lg:col-span-3'>
      <img
        className='w-96 h-96'
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageCard;
