import React, { useState, useEffect, useRef } from 'react';
import styles from './ImagePreview.module.css';

export const ImagePreview = ({ src }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);

  const updateDimensions = () => {
    if (imageRef.current) {
      const aspectRatio = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
      const containerWidth = window.innerWidth * 0.9; // Adjust 0.9 to the desired percentage of window width
      const containerHeight = containerWidth / aspectRatio;
      setDimensions({ width: containerWidth, height: containerHeight });
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [src]);

  return (
    <div className={styles.imageContainer}>
      <img
        ref={imageRef}
        src={src}
        alt="Preview"
        onLoad={updateDimensions}
        className={styles.image}
      />
    </div>
  );
};

export default ImagePreview;