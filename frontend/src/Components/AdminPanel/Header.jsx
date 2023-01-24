import React from 'react';
import styles from './Admin.module.scss'
import {BiUserCircle} from 'react-icons/bi'
const Header = () => {
    return (
        <div className={styles.pageTitle}>
            <h4>
                <BiUserCircle/>
                <span>Пользователи</span>
            </h4>
        </div>
    );
};

export default Header;