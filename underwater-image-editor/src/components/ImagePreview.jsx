import React, { useState, useEffect, useRef } from 'react'

export const ImagePreview = ({src}) => {

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const imageRef = useRef(null);

        const updateDimensions = () => {
            if (imageRef.current) {
            const aspectRatio = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
            const newWidth = window.innerWidth * 0.9; // Adjust 0.8 to the desired percentage of window width
            const newHeight = newWidth / aspectRatio;
            setDimensions({ width: newWidth, height: newHeight });
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
            ref={imageRef}
            src={src}
            alt="Preview"
            onLoad={updateDimensions} // Update dimensions when the image is loaded
            style={{ width: dimensions.width, height: dimensions.height }}
        />
        </div>
    );
};

export default ImagePreview;
