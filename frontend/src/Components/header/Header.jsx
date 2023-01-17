import React from 'react';
import styles from './Header.module.scss'
import logo from '../../images/logo.png'
// import { NavLink } from "react-router-dom"
import { useState } from 'react';
const Header = () => {
    const [sideBar, setSideBar] = useState(false)
    const handleSidebar = () => {
        setSideBar(!sideBar)
    }
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <img src={logo} alt="logoPhoto" className={styles.logoImage} />

            </div>
            <div className={styles.routes} style={{ color: 'white' }}>
                <div > Тренажёры </div>
                <div > Тренеры </div>
                <div > Массаж </div>
                <div > Магазин </div>
            </div>
            <div className={styles.menuButton} onClick={() => handleSidebar()}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <div className={sideBar ? styles.sideBarActive : styles.sideBarHidden}></div>
        </div>
    );
};

export default Header;