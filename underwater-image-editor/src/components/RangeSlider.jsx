import React, {useState, useEffect, useRef} from 'react'
import styles from './RangeSlider.module.css'

const RangeSlider = ({ min, max, value, step, setValue }) => {

    const [sliderValue, setSliderValue] = useState(value);

      // Update slider value when the value prop changes
    useEffect(() => {
        setSliderValue(value);
    }, [value]);

    const handleSliderChange = (event) => {
        let value = event.target.value;
        setSliderValue(value);
        setValue(value);
    };

    const handleInputChange = (event) => {
        let value = event.target.value;
    
        if (value > max) value = max;
        if (value < min) value = min;
        if (value % step !== 0) value = Math.floor(value);
    
        setSliderValue(value);
        setValue(value);
    };

    return (
        <div className={styles.rangeSlider}>
          <div className={styles.sliderValues}>
            <small>{min}</small>
            <input
              type="number"
              min={min}
              max={max}
              step={step}
              value={sliderValue}
              onChange={handleInputChange}
              className={styles.numberInput}
            />
            <small>{max}</small>
          </div>
          <div className={styles.sliderContainer}>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
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