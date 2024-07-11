import React from 'react';
import RangeSlider from './RangeSlider.jsx';
import styles from './SettingsCard.module.css';

const SettingsCard = ({ settings, setters, handleNext, handlePrev }) => {
  return (
    <div className={styles.container}>
      <small>SettingsCard</small>
      <div className={styles.sliders}>
        {settings.map((setting, index) => (
          <div key={index} className={styles.slider}>
            <small>{setting.label}</small>
            <RangeSlider
              min={setting.min}
              max={setting.max}
              value={setting.value}
              step={setting.step}
              setValue={setters[index]}
            />
          </div>
        ))}
      </div>
      <div className={styles.paginationControls}>
        <button className={`${styles.left}`} onClick={handlePrev}>&lt;</button>
        <button className={`${styles.right}`} onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};


export default SettingsCard;