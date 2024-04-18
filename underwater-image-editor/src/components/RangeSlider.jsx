import React, {useState, useEffect, useRef} from 'react'
import styles from './RangeSlider.module.css'

const RangeSlider = ({min, max, value, step}) => {

    const [sliderValue, setSliderValue] = useState(value);
    const [inputValue, setInputValue] = useState(value);

    const handleSliderInput = (event) => {
        const range = max - min;
        const distance = sliderRef.current.value - min;
        const percentage = (distance / range) * 100;

        setInputValue(event.current.value);
        setSliderValue(event.current.value);

    }



    //const [sliderRange, setSliderRange] = useState(value);
    //const [inputValue, setInputValue] = useState(value);
    //const sliderRef = useRef(null);

    /*
    function handleSliderInput() {
        const range = max - min;
        const distance = sliderRef.current.value - min;
        const percentage = (distance / range) * 100;

        setSliderRange(percentage);
        setInputValue(sliderRef.current.value);
    }
    
   
    useEffect(() => {
        handleSliderInput();
    }, [value])
    */

  return (

    <div>
        <div>
            <small>{min}</small>
                <span>{inputValue}</span>

                {/*<input
                    type="number"
                    value={inputValue}
                    onChange={handleSliderInput}
                    className={styles.numberInput}
                />*/}
            <small>{max}</small>
        </div>
        <div className={styles.sliderContainer}>
            <input type="range" min={min} max={max} step={step} onChange={handleSliderInput} className={styles.slider}/>
            <div className={styles.sliderThumb}></div>
            <div className={styles.progress}></div>
        </div>
    </div>


    /*
    <div className={styles.rangeSlider}>
        <div className={styles.sliderValues}>
            <small>{min}</small>
            <input 
                type="number"
                value={inputValue}
                onChange={handleSliderInput}
                min={min} max={max}
                className={styles.numberInput}
                step={step}
            />
            <small>{max}</small>
        </div>
        <div className={styles.sliderContainer}>
            <input type="range" onChange={handleSliderInput} className={styles.slider}/>
            <div className={styles.sliderThumb}></div>
            <div className={styles.progress}></div>
        </div>
    </div>*/
  )
}

export default RangeSlider