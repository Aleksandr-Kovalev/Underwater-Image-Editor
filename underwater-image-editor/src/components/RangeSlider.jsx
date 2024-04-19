import React, {useState, useEffect, useRef} from 'react'
import styles from './RangeSlider.module.css'

const RangeSlider = (props) => {

    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event) => {

        let value = event.target.value;
        setSliderValue(value);
        props.setValue(value);

    }

    const handleInputChange = (event) => {

        let value = event.target.value;

        if(value > props.max)
            value = props.max;

        if(value < props.min)
            value = props.min;

        if(value % props.step != 0)
            value = Math.floor(value);

        setSliderValue(value);
        props.setValue(value);

    }

  return (

    <div className={styles.rangeSlider}>
        <div className={styles.sliderValues}>
            <small>{props.min}</small>
                <input type ="number"
                    min={props.min}
                    max={props.max}
                    step={props.step}
                    value={sliderValue}
                    onChange={handleInputChange}
                    className={styles.numberInput}
                />
            <small>{props.max}</small>
        </div>
        <div className={styles.sliderContainer}>
                <input type ="range"
                    min={props.min}
                    max={props.max}
                    step={props.step}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className={styles.slider}
                />
                <div className={styles.sliderThumb}></div>
                <div className={styles.progress}></div>
        </div>
    </div>
  )
}

export default RangeSlider