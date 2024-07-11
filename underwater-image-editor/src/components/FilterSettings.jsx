import React, { useState } from 'react';
import styles from './FilterSettings.module.css'; // Import CSS for FilterSettings

const FilterSettings = ({ onNoiseReduction, onAutoWhiteBalance }) => {
  const [noiseReductionApplied, setNoiseReductionApplied] = useState(false);
  const [autoWhiteBalanceApplied, setAutoWhiteBalanceApplied] = useState(false);

  const handleNoiseReductionClick = () => {
    if (noiseReductionApplied) {
      // Undo the filter logic (placeholder)
      console.log('Undoing noise reduction...');
      setNoiseReductionApplied(false);
    } else {
      onNoiseReduction(); // Apply noise reduction
      setNoiseReductionApplied(true);
    }
  };

  const handleAutoWhiteBalanceClick = () => {
    if (autoWhiteBalanceApplied) {
      // Undo the filter logic (placeholder)
      console.log('Undoing auto white balance...');
      setAutoWhiteBalanceApplied(false);
    } else {
      onAutoWhiteBalance(); // Apply auto white balance
      setAutoWhiteBalanceApplied(true);
    }
  };

  return (
    <div className={styles.filterCard}>
      <h3>Filters</h3>
      <button onClick={handleNoiseReductionClick}>
        {noiseReductionApplied ? 'Undo Noise Reduction' : 'Noise Reduction'}
      </button>
      <button onClick={handleAutoWhiteBalanceClick}>
        {autoWhiteBalanceApplied ? 'Undo Auto White Balance' : 'Auto White Balance'}
      </button>
      {/* Add more buttons for other filters */}
    </div>
  );
};

export default FilterSettings;