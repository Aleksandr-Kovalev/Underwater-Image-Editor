import React, {useState, useEffect} from 'react'
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

  useEffect(() => {
    let openImgOnLoad = false;

    if (!openImgOnLoad) 
        setImgFile(sampleImg);
        setOriginalImg(sampleImg); // Store the original image
  }, []);

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
      <UpLoadButton 
          setImgFile={(file) => {
            setImgFile(file);
            setOriginalImg(file);
          }} 
        />
        <button>Reset</button>
        <button>Download</button>
      </div>
    </div>
  );
};

export default MainView;