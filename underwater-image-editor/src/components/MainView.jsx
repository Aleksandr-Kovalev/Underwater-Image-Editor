import React, {useState, useEffect, useRef} from 'react'
import styles from './MainView.module.css'
import sampleImg from '../assets/sample.jpg'

import UpLoadButton from './UpLoadButton.jsx'
import SettingsCard from './SettingsCard.jsx'
import ImagePreview from './ImagePreview.jsx'
import FilterSettings from './FilterSettings.jsx';

const MainView = () => {
  const [imgFile, setImgFile] = useState(null);
  const [originalImg, setOriginalImg] = useState(null);
  const [page, setPage] = useState(0);
  const [brightnessValue, setBrightnessValue] = useState(0);
  const [contrastValue, setContrastValue] = useState(0);
  const [redLevel, setRedLevel] = useState(0);
  const [blueLevel, setBlueLevel] = useState(0);
  const [greenLevel, setGreenLevel] = useState(0);
  const [hueLevel, setHueLevel] = useState(0);
  const [saturationLevel, setSaturationLevel] = useState(0);
  const imagePreviewRef = useRef(null);

  useEffect(() => {
    let openImgOnLoad = false;

    if (!openImgOnLoad) 
        setImgFile(sampleImg);
        setOriginalImg(sampleImg); // Store the original image
  }, []);

   // Function to reset all sliders to 0
  const resetSliders = () => {
    setBrightnessValue(0);
    setContrastValue(0);
    setRedLevel(0);
    setBlueLevel(0);
    setGreenLevel(0);
    setHueLevel(0);
    setSaturationLevel(0);
  };

  const settingsPages = [
    {
      settings: [
        { label: 'Brightness', min: -100, max: 100, value: brightnessValue, step: 0.5 },
        { label: 'Contrast', min: -100, max: 100, value: contrastValue, step: 0.5 }
      ],
      setters: [setBrightnessValue, setContrastValue]
    },
    {
      settings: [
        { label: 'Red Level', min: -100, max: 100, value: redLevel, step: 0.5 },
        { label: 'Blue Level', min: -100, max: 100, value: blueLevel, step: 0.5 },
        { label: 'Green Level', min: -100, max: 100, value: greenLevel, step: 0.5 }
      ],
      setters: [setRedLevel, setBlueLevel, setGreenLevel]
    },
    {
      settings: [
        { label: 'Hue', min: -100, max: 100, value: hueLevel, step: 0.5 },
        { label: 'Saturation', min: -100, max: 100, value: saturationLevel, step: 0.5 }
      ],
      setters: [setHueLevel, setSaturationLevel]
    }
  ];

  const handleNext = () => {
    setPage((prevPage) => (prevPage + 1) % settingsPages.length);
  };

  const handlePrev = () => {
    setPage((prevPage) => (prevPage - 1 + settingsPages.length) % settingsPages.length);
  };

   // Function to handle noise reduction filter
  const handleNoiseReduction = () => {
    console.log('Applying noise reduction...');
    // Implement noise reduction logic here
  };

  // Function to handle auto white balance filter
  const handleAutoWhiteBalance = () => {
    console.log('Applying auto white balance...');
    // Implement auto white balance logic here
  };

  const handleImageUpload = (imageUrl) => {
    setImgFile(imageUrl); // Update the current image
    setOriginalImg(imageUrl); // Store the original image
    resetSliders(); // Reset sliders when new image is uploaded
  };

  const handleDownload = () => {
    if (!imgFile) {
      console.error('Image is not loaded yet');
      return;
    }
  
    // Create a hidden canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    // Load the original image
    const img = new Image();
    img.onload = () => {
      // Set canvas dimensions to match original image
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
  
      // Apply settings from settingsPages to the canvas context
      ctx.filter = `brightness(${1 + brightnessValue / 100}) 
                    contrast(${1 + contrastValue / 100}) 
                    hue-rotate(${hueLevel}deg) 
                    saturate(${1 + saturationLevel / 100})`;
      
      // Draw the image with applied filters onto the canvas
      ctx.drawImage(img, 0, 0);
  
      // Convert canvas to a downloadable image
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
  
        // Create a temporary link element to trigger download
        const link = document.createElement('a');
        link.href = url;
        link.download = `edited_image.${imgFile.type.split('/')[1]}`; // Use the original image's type
        document.body.appendChild(link);
        link.click();
  
        // Clean up
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
      }, imgFile.type); // Pass the original image type to preserve format
    };
  
    img.src = imgFile;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {imgFile && (
          <ImagePreview
            src={imgFile}
            brightness={brightnessValue}
            contrast={contrastValue}
            hue={hueLevel}
            saturation={saturationLevel}
          />
        )}
      </div>
      <SettingsCard 
        settings={settingsPages[page].settings} 
        setters={settingsPages[page].setters} 
        handleNext={handleNext} 
        handlePrev={handlePrev} 
      />
      {/* Filter Settings Card */}
      <FilterSettings 
        onNoiseReduction={handleNoiseReduction} 
        onAutoWhiteBalance={handleAutoWhiteBalance} 
      />
      <div className={styles.imgControls}>
      <UpLoadButton setImgFile={handleImageUpload} />
        <button onClick={resetSliders}>Reset</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default MainView;