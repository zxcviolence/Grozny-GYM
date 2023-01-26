import React, { useEffect } from "react";
import styles from "./Profile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/usersSlice";
const Profile = () => {
  const users = useSelector((state) => state.users.users)
  const loading = useSelector((state) => state.users.loading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) {
    return <div className={styles.loader}>Loading</div>;
  }
  
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Профиль</h1>
        <button onClick={() => window.location.href = '/profile/edituser'} className={styles.editButton}>Редактировать профиль</button>
      </div>
      <div className={styles.club}>
        <p>клуб</p>
        <span>Grozny Gym</span>
      </div>
      <div className={styles.pdata}>
        <p>персональные данные</p>
        <span>Фамилия: {users.surname}</span>
        <span>Имя: {users.name}</span>
        <span>Отчество:{users.patronymic}</span>
        <span>Дата рождения: {users.date}</span>
        <span>Телефон: {users.phone}</span>
        <span>Эл. почта: {users.email}</span>
      </div>
      <div className={styles.manager}>
        <p>мой менеджер</p>
        <span>Имя:</span>
      </div>
    </div>
  );
};

export default Profile;
