import React, { useState, useEffect, useRef } from 'react';
import styles from './ImagePreview.module.css';

export const ImagePreview = ({ src, brightness, contrast, hue, saturation }, ref) => {
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
  

  const brightnessFilterValue = 1 + brightness / 100; // Adjusting the value range
  const contrastFilterValue = 1 + contrast / 100; // Adjusting the value range
  const hueFilterValue = hue;
  const saturationFilterValue = 1 + saturation / 100; 

  return (
    <div className={styles.imageContainer}>
      <img
        ref={imageRef}
        src={src}
        alt="Preview"
        onLoad={updateDimensions}
        className={styles.image}
        style={{ filter: `brightness(${brightnessFilterValue}) 
                            contrast(${contrastFilterValue})
                            hue-rotate(${hueFilterValue}deg)
                            saturate(${saturationFilterValue})` }}
      />
    </div>
  );
};

export default ImagePreview;