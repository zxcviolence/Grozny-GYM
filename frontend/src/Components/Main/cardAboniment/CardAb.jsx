import React from 'react';
import styles from "./cardAB.module.scss"
const CardAb = () => {
    return (
        <div className={styles.card_block}>
             {/* 1 */}
            <div className={styles.card_div}>
                <div className={styles.images}>
                </div>
                <div className={styles.information}>
                    <h3>Абонимент</h3>
                    <span>от 1500р</span>
                </div>
            </div>
            {/* 2 */}
            <div className={styles.card_div}>
                <div className={styles.images}>
                </div>
                <div className={styles.information}>
                    <h3>Абонимент</h3>
                    <span>от 1500р</span>
                </div>
            </div>
            {/* 3 */}
            <div className={styles.card_div}>
                <div className={styles.images}>
                </div>
                <div className={styles.information}>
                    <h3>Абонимент</h3>
                    <span>от 1500р</span>
                </div>
            </div>
        </div>
    );
};

export default CardAb;