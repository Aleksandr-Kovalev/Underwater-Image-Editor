import React, {useState, useEffect} from 'react'
import styles from './MainView.module.css'
import sampleImg from '../assets/sample.jpg'

import UpLoadButton from './UpLoadButton.jsx'
import SettingsCard from './SettingsCard.jsx'
import ImagePreview from './ImagePreview.jsx'

const MainView = () => {
  const [imgFile, setImgFile] = useState(null);
  const [page, setPage] = useState(0);
  const [brightnessValue, setBrightnessValue] = useState(0);
  const [contrastValue, setContrastValue] = useState(0);
  const [redLevel, setRedLevel] = useState(0);
  const [hueLevel, setHueLevel] = useState(0);
  const [saturationLevel, setSaturationLevel] = useState(0);

  useEffect(() => {
    let openImgOnLoad = false;

    if (!openImgOnLoad) 
        setImgFile(sampleImg);
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
        { label: 'Red Level', min: -100, max: 100, value: redLevel, step: 0.5 }
      ],
      setters: [setRedLevel]
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

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {imgFile && <ImagePreview src={imgFile} />}
      </div>
      <SettingsCard 
        settings={settingsPages[page].settings} 
        setters={settingsPages[page].setters} 
        handleNext={handleNext} 
        handlePrev={handlePrev} 
      />
      <div className={styles.imgControls}>
        <UpLoadButton setImgFile={setImgFile} />
        <button>Reset</button>
        <button>Download</button>
      </div>
    </div>
  );
};

export default MainView;