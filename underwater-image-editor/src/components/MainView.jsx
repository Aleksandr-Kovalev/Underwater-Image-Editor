import React, {useState, useEffect} from 'react'
import styles from './MainView.module.css'
import sampleImg from '../assets/sample.jpg'

import UpLoadButton from './UpLoadButton.jsx'
import SettingsCard from './SettingsCard.jsx'
import ImagePreview from './ImagePreview.jsx'



const MainView = () => {

    const [imgFile, setImgFile] = useState(null);
    useEffect(() => {
        let openImgOnLoad = false;

        if (!openImgOnLoad) 
            setImgFile(sampleImg);
    }, []);

    //console.log(brightnessValue);
    //console.log(contrastValue);
    //console.log(redLevel);
    //console.log(hueLevel);
    //console.log(saturationLevel);

    //ToDO
    // the image sliders should be in cards that are paged left and right.

  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            {imgFile && <ImagePreview src={imgFile} />}
            {/*<img src={imgFile} alt="Image Area"/>*/}
        </div>
        <SettingsCard />
        
        <div className={styles.imgControls}>
            <UpLoadButton  setImgFile={setImgFile} /> 
            <button>Reset</button>
            <button>Download</button>
        </div>
    </div>  
  )
}

export default MainView