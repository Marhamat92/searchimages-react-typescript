import React from "react";

type Props = {
  image: any;
};

function ImageCard({ image }: Props) {
  return (
    <div className='col-span-1 lg:col-span-3 w:200px h:200px'>
      <img
        className='w-40 h-40'
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageCard;
