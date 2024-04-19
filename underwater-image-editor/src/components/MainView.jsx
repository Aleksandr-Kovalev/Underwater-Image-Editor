import React, {useState} from 'react'
import styles from './MainView.module.css'
import sampleImg from '../assets/sample.jpg'
import RangeSlider from './RangeSlider.jsx'


const MainView = () => {

    const [brightnessValue, setBrightnessValue] = useState(0);
    const [contrastValue, setContrastValue ] = useState(0);
    const [redLevel, setRedLevel ] = useState(0);
    const [hueLevel, setHueLevel ] = useState(0);
    const [saturationLevel, setSaturationLevel ] = useState(0);

    //console.log(brightnessValue);
    //console.log(contrastValue);
    //console.log(redLevel);
    //console.log(hueLevel);
    //console.log(saturationLevel);

  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img src={sampleImg} alt="Image Area"/>
        </div>
        <small>Brightness</small>
        <div>
            <RangeSlider min={-100} max={100} value={0} step={0.5} setValue={setBrightnessValue}/>
        </div>
        <small>Contrast</small>
        <div>
            <RangeSlider min={-100} max={100} value={0} step={0.5} setValue={setContrastValue}/>
        </div>
        <small>Red Level</small>
        <div>
            <RangeSlider min={-100} max={100} value={0} step={0.5} setValue={setRedLevel}/>
        </div>
        <small>Hue</small>
        <div>
            <RangeSlider min={-100} max={100} value={0} step={0.5} setValue={setHueLevel}/>
        </div>
        <small>Saturation</small>
        <div>
            <RangeSlider min={-100} max={100} value={0} step={0.5} setValue={setSaturationLevel}/>
        </div>
        <div className={styles.imgControls}>
            <button>Upload</button>
            <button>Download</button>
            <button>Reset</button>
        </div>
    </div>  
  )
}

export default MainView