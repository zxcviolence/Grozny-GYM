import React from "react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/usersSlice";
import styles from "./Admin.module.scss";
import { NavLink } from "react-router-dom";

const Admin = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.sidebar}>
      <div className={styles.categoryContent}>
        <div>
          <img
            className={styles.avatar}
            src={`/assets/images/avatars/${users.image}`}
            alt="avatar"
          />
               <span className={styles.role}>{users.login}</span>
          <span className={styles.role}>{users.role}</span>
        </div>
      </div>
      <div className={styles.navigationWrapper}>
        <ul className={styles.navigation}>
          <li>
            <a href="/profile" target="_blank">
              <FaUserAlt
                className={styles.fafaUser}
                style={{ color: "black" }}
              />
              <span>Просмотр профиля</span>
            </a>
          </li>
          <li>
            <NavLink to="/admin/edituser">
              <BsFillGearFill
                className={styles.fafaUser}
                style={{ color: "black" }}
              />
              <span>Настройки профиля</span>
            </NavLink>
          </li>
          <li>
            <AiOutlinePoweroff
              className={styles.fafaUser}
              style={{ color: "red" }}
            />
            <span onClick={() => localStorage.clear()}>Выход</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Admin;