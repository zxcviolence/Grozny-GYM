import React from "react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/usersSlice";
import styles from "./Admin.module.scss";
const Admin = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.categoryContent}>
        <div>
          <img
            className={styles.avatar}
            src={`assets/images/avatars/${users.image}`}
            alt="avatar"
          />
          <span className={styles.role}>{users.role}</span>
        </div>
      </div>
      <div className={styles.navigationWrapper}>
        <ul className={styles.navigation}>
          <li>
            <a href="/profile" target="_blank">
              <  FaUserAlt className={styles.fafaUser} style={{ color: "black" }} />
              <span>Просмотр профиля</span>
            </a>  
          </li>
          <li>
            <a href="/profile" target="_blank">
              <  FaUserAlt className={styles.fafaUser} style={{ color: "black" }} />
              <span>Настройки профиля</span>
            </a>  
          </li>
          <li>
            <a href="/profile" target="_blank">
              <  FaUserAlt className={styles.fafaUser} style={{ color: "black" }} />
              <span>Выход</span>
            </a>  
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
