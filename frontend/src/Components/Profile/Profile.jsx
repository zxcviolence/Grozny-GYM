import React from "react";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Профиль</h1>
      </div>
      <div className={styles.club}>
        <p>клуб</p>
        <span>Grozny Gym</span>
      </div>
      <div className={styles.pdata}>
        <p>персональные данные</p>
        <span>Фамилия:</span>
        <span>Имя:</span>
        <span>Отчество:</span>
        <span>Дата рождения:</span>
        <span>Телефон:</span>
        <span>Эл. почта:</span>
      </div>
      <div className={styles.manager}>
        <p>мой менеджер</p>
        <span>Имя:</span>
      </div>
    </div>
  );
};

export default Profile;
