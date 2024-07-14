import React from 'react'
import styles from './UpLoadButton.module.css'

const UpLoadButton = ({setImgFile}) => {

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        console.log('File selected:', file);
        console.log('Image URL:', imageUrl);
        setImgFile(imageUrl);
      }
    };

    return (
      <label className={styles['custom-file-upload']}>
        <input
          type="file"
          onChange={handleImageUpload}
          className={styles['file-input']} // Apply CSS module class
        />
        <div className={styles['upload-button']}>
          Upload
        </div>
      </label>
    );
  };

export default UpLoadButton


//TODO Fix style
