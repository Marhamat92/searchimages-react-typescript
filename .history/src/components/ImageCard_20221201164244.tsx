import React from "react";

type Props = {
  image: any;
};

function ImageCard({ image }: Props) {
  return (
    <div>
      <img
        className='lg:col-span-3'
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageCard;
