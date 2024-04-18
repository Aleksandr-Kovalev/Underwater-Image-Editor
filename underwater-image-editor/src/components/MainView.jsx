import React, {useState} from 'react'
import styles from './MainView.module.css'
import sampleImg from '../assets/sample.jpg'
import RangeSlider from './RangeSlider.jsx'


const MainView = () => {

    

  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img src={sampleImg} alt="Image Area"/>
        </div>
        <div>
            <RangeSlider min={-100} max={100} value={0} step={0.5} />

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