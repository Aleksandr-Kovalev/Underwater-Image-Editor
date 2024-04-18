import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/Logo.jpg'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <img src={logo} alt="" className={styles.logo}/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar