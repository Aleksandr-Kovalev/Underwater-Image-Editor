import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul>
            <li>&copy; {new Date().getFullYear()} Underwater Image Editor</li>
            <li>Author: Aleksandr Kovalev</li>
            <li><a href="https://github.com/Aleksandr-Kovalev" target="_blank">Github Link</a></li>
        </ul>
    </footer>
  )
}

export default Footer