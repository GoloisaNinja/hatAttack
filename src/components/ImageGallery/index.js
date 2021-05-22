import React, { useState, useEffect } from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';

export function ImageGallery({ images, selectedImageVariantId }) {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images.find(({ id }) => id === selectedImageVariantId) || images[0]
  );
  useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedImageVariantId) || images[0]
    );
  }, [selectedImageVariantId, setActiveImageThumbnail, images]);
  const handleClick = image => {
    setActiveImageThumbnail(image);
  };
  return (
    <ImageGalleryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
        {images.map(image => (
          <ImageThumbnail
            key={image.id}
            image={image}
            onClick={handleClick}
            isActive={activeImageThumbnail.id === image.id}
          />
        ))}
      </div>
    </ImageGalleryWrapper>
  );
}
