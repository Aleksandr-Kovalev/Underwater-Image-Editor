import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import styles from './SettingsCard.module.css'
import RangeSlider from './RangeSlider.jsx'

const SettingsCard = () => {

    const [brightnessValue, setBrightnessValue] = useState(0);
    const [contrastValue, setContrastValue ] = useState(0);
    const [redLevel, setRedLevel ] = useState(0);
    const [hueLevel, setHueLevel ] = useState(0);
    const [saturationLevel, setSaturationLevel ] = useState(0);

    console.log(brightnessValue);
    console.log(contrastValue);
    console.log(redLevel);
    console.log(hueLevel);
    console.log(saturationLevel);

    return (
      <div className={styles.container}>
        <small>SettingsCard</small>
        <div className={styles.sliders}>
            <small>Brightness</small>
            <div className={styles.slider}>
                <RangeSlider min={-100} max={100} value={0} step={0.5} setValue={setBrightnessValue}/>
            </div>
            <small>Contrast</small>
            <div className={styles.slider}>
                <RangeSlider min={-100} max={100} value={0} step={0.5} setValue={setContrastValue}/>
            </div>
        </div>
        
         {/*
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
        </div>*/}
      </div>
    )
}

export default SettingsCard